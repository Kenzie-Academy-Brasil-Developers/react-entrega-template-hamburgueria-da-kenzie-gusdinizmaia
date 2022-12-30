import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
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
  removeItem: (product: iProduct) => void;
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
          resp.status === 401 && localStorage.removeItem("authToken");
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
    toast.success("Item adicionado ao carrinho", {
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  }

  function remove(id: number) {
    setCart((cart) => {
      const newArray = [...cart];
      const index = newArray.findIndex((elem) => elem.id === id);
      newArray.splice(index, 1);
      return [...newArray];
    });
    toast.success("Item removido do carrinho", {
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  }

  function removeItem(product: iProduct) {
    setCart((cart) =>
      cart.filter((elem) => {
        return elem !== product;
      })
    );
    toast.success("Item removido do carrinho", {
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  }

  function removeAll() {
    setCart(() => []);
    toast.success("Todos os itens removido do carrinho", {
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
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
        removeItem,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
