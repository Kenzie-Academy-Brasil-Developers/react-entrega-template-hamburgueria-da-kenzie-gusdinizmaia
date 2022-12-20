import { createContext } from "react";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

interface iHomeContextProps {
  children: React.ReactNode;
}

interface iHomeContext {
  modalCart: boolean;
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  pageFilter: string | null;
  setPageFilter: React.Dispatch<React.SetStateAction<null>>;
  filter: (product: string | null) => void;
  products: Array<object> | null;
}

export const HomeContext = createContext({} as iHomeContext);

export function HomeProvider({ children }: iHomeContextProps) {
  const [modalCart, setModalCart] = useState(false);
  const [pageFilter, setPageFilter] = useState(null);

  const [filterProducts, setFilterProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function getProducts() {
      const token = localStorage.getItem("authToken");

      api
        .get("/products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((resp) => setProducts(resp.data))
        .catch((err) => console.log(err));
    }
    getProducts();
  }, []);

  console.log(products);

  function filter(product: string | null): void {
    if (product) {
      const newArray = products.filter((elem) => {
        console.log(elem["name"]);
        return elem["name"]
          .slice(0, product.length)
          .toLowerCase()
          .includes(product.toLowerCase());
      });

      console.log(newArray);
      return setFilterProducts(newArray);
    }
    return setFilterProducts([]);
  }

  return (
    <HomeContext.Provider
      value={{
        setModalCart,
        modalCart,
        pageFilter,
        setPageFilter,
        filter,
        products,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
