import { IconCart, IconExit, StyledNav } from "./style";
import { Seach } from "../Seach";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";

export function NavHeader() {
  const { setModalCart, cart } = useContext(HomeContext);

  return (
    <StyledNav>
      <Seach />
      <IconCart onClick={() => setModalCart(true)} />
      <div className="count__products">
        <p>{cart.length} </p>
      </div>
      <Link onClick={() => localStorage.removeItem("authToken")} to="/login">
        <IconExit />
      </Link>
    </StyledNav>
  );
}
