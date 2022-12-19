import { createContext } from "react";
import { useState } from "react";

interface iHomeContextProps {
  children: React.ReactNode;
}

interface iHomeContext {
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  modalCart: boolean;
}

export const HomeContext = createContext({} as iHomeContext);

export function HomeProvider({ children }: iHomeContextProps) {
  const [modalCart, setModalCart] = useState(false);

  return (
    <HomeContext.Provider value={{ setModalCart, modalCart }}>
      {children}
    </HomeContext.Provider>
  );
}
