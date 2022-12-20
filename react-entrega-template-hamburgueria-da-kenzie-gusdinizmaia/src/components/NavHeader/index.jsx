import { IconCart, IconExit, StyledNav } from "./style";
import { Seach } from "../Seach";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";

export function NavHeader() {
  const { setModalCart } = useContext(HomeContext);

  return (
    <StyledNav>
      <Seach />
      <IconCart onClick={(e) => setModalCart(true)} />
      <Link to="/login">
        <IconExit />
      </Link>
    </StyledNav>
  );
}
