import { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface iUserContext {
  children: React.ReactNode;
}
interface iUserContextProps {
  login: (user: object) => void;
  register: (user: object) => void;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  user: object | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as iUserContextProps);

export function UserProvider({ children }: iUserContext) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  function login(user: object) {
    api
      .post("/login", user)
      .then((resp) => {
        if (resp.status === 200) {
          toast.success("Usuário logado com sucesso");
          window.localStorage.setItem("authToken", resp.data.accessToken);

          setTimeout(() => navigate("/home"), 3000);

          setUser(resp.data.user);
        } else if (resp.status === 401) {
          toast.success("Usuário logado com sucesso");
        }
        return toast.error(resp.data.message);
      })
      .catch((err) => {
        console.log(err);
        return toast.error(err.response.data);
      });
  }

  function register(user: object) {
    api
      .post("/users", user)
      .then((resp) => {
        if (resp.status === 201) {
          toast.success("Conta criada com sucesso");
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
    <UserContext.Provider
      value={{ login, register, setUser, user, loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
}
