import { createBrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

export function RouteMain() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={""} />
        <Route path="/register" element={""} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="*" element={<h1>Eita</h1>} />
    </Routes>
  );
}
