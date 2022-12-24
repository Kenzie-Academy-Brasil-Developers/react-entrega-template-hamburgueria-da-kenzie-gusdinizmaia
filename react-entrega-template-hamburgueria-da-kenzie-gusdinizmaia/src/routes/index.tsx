import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectRoutes } from "../components/ProtectRoutes";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function RouteMain() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route element={<ProtectRoutes />}>
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
