import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { HomeContext } from "../../contexts/HomeContext";
import { UserContext } from "../../contexts/UserContext";

export function ProtectRoutes() {
  const { user, loading } = useContext(UserContext);
  const { products } = useContext(HomeContext);

  if (loading) {
    return null;
  }

  return user || products.length > 0 ? <Outlet /> : <Navigate to="/" />;
}
