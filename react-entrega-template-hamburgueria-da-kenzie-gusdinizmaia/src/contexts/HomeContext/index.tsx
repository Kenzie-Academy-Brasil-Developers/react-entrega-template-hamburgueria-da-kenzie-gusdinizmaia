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
  setPageFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: (product: string | null) => void;
  products: iProduct[];
  filterProducts: iProduct[];
  cart: iProduct[];
  setCart: React.Dispatch<React.SetStateAction<iProduct>>;
  remove: (index: number) => void;
  removeAll: () => void;
}

interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const HomeContext = createContext({} as iHomeContext);

export function HomeProvider({ children }: iHomeContextProps) {
  const [modalCart, setModalCart] = useState(false);
  const [pageFilter, setPageFilter] = useState(null);

  const [cart, setCart] = useState([] as iProduct[]);
  const [filterProducts, setFilterProducts] = useState([] as iProduct[]);
  const [products, setProducts] = useState([] as iProduct[]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function getProducts() {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setLoading(true);
        return;
      }

      api
        .get("/products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((resp) => setProducts(resp.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    getProducts();
  }, []);

  function filter(product: string | null): void {
    if (product) {
      const newArray = products.filter((elem) => {
        return elem.name
          .slice(0, product.length)
          .toLowerCase()
          .includes(product.toLowerCase());
      });

      setPageFilter(product);
      setFilterProducts(newArray);
    } else {
      setFilterProducts([]);
    }
  }

  function remove(index: number) {
    setCart((cart) =>
      cart.filter((elem, i) => {
        console.log(i, index);
        return i !== index;
      })
    );
  }

  function removeAll() {
    setCart(() => []);
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
        filterProducts,
        cart,
        setCart,
        remove,
        removeAll,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
