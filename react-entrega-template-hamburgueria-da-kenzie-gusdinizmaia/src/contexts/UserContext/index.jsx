import { useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(user) {
    api
      .post("/login", user)
      .then((resp) => {
        console.log(resp);
        setUser(resp.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  }

  function register(user) {
    api
      .post("/users", user)
      .then((resp) => {
        console.log(resp);
        setUser(resp.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  }

  return (
    <UserContext.Provider value={{ login, register, setUser, user }}>
      {children}
    </UserContext.Provider>
  );
}
