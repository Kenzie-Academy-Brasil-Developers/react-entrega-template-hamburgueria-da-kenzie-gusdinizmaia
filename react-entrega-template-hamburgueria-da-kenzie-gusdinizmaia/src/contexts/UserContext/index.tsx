import { useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface iUserContext {
  children: React.ReactNode;
}
interface iUserContextProps {
  login: (user: object) => void;
  register: (user: object) => void;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  user: object | null;
}

export const UserContext = createContext({} as iUserContextProps);

export function UserProvider({ children }: iUserContext) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  function login(user: object) {
    api
      .post("/login", user)
      .then((resp) => {
        if (resp.status === 200) {
          console.log(resp);
          alert("deu certo");
          window.localStorage.setItem("authToken", resp.data.accessToken);

          setTimeout(() => navigate("/home"), 3000);

          return setUser(resp.data.user);
        }
        return alert(resp.data.message);
      })
      .catch((err) => {
        return alert(err.response.data);
      });
  }

  function register(user: object) {
    api
      .post("/users", user)
      .then((resp) => {
        if (resp.status === 200) {
          console.log(resp);
          alert("deu certo");
          window.localStorage.setItem("authToken", resp.data.accessToken);

          setTimeout(() => navigate("/home"), 3000);

          return setUser(resp.data.user);
        }
        return alert(resp.data.message);
      })
      .catch((err) => {
        return alert(err.response.data);
      });
  }

  return (
    <UserContext.Provider value={{ login, register, setUser, user }}>
      {children}
    </UserContext.Provider>
  );
}
