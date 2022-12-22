import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { UserContext } from "../UserContext";

interface iHomeContextProps {
  children: React.ReactNode;
}

interface iHomeContext {
  modalCart: boolean;
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  pageFilter: string | null;
  setPageFilter: React.Dispatch<React.SetStateAction<string | null>>;
  filter: (product: string | null) => void;
  products: iProduct[];
  filterProducts: iProduct[];
  cart: iProduct[];
  remove: (index: number) => void;
  removeAll: () => void;
  add: (product: iProduct) => void;
}

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const HomeContext = createContext({} as iHomeContext);

export function HomeProvider({ children }: iHomeContextProps) {
  const [modalCart, setModalCart] = useState(false);
  const [pageFilter, setPageFilter] = useState<string | null>(null);

  const [cart, setCart] = useState([] as iProduct[]);
  const [filterProducts, setFilterProducts] = useState([] as iProduct[]);
  const [products, setProducts] = useState([] as iProduct[]);

  const { setLoading, user } = useContext(UserContext);

  useEffect(() => {
    function getProducts() {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setLoading(false);
        return;
      }

      api
        .get("/products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((resp) => {
          setProducts(resp.data);
        })
        .catch(
          (err) =>
            err.response.status === 401 && localStorage.removeItem("authToken")
        )
        .finally(() => setLoading(false));
    }
    getProducts();
  }, [user]);

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

  function add(product: iProduct) {
    setCart((cart) => [...cart, product]);
  }

  function remove(index: number) {
    setCart((cart) =>
      cart.filter((elem, i) => {
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
        remove,
        removeAll,
        add,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
