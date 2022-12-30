import { IconCart, IconExit, IconSearch, StyledNav } from "./style";
import { Seach } from "../Seach";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import { UserContext } from "../../contexts/UserContext";

export function NavHeader() {
  const { setModalCart, cart } = useContext(HomeContext);
  const [showInput, setShowInput] = useState(false);
  const { width } = useContext(UserContext);
  const [animation, setAnimation] = useState(false);

  return (
    <StyledNav>
      <Seach
        setShowInput={setShowInput}
        showInput={showInput}
        setAnimation={setAnimation}
        animation={animation}
      />
      {width < 750 ? (
        <IconSearch
          onClick={() => {
            setAnimation(true);
            setShowInput(true);
          }}
        />
      ) : (
        ""
      )}
      <div onClick={() => setModalCart(true)} className="count__products">
        <IconCart />
        <div>
          <p>{cart.length}</p>{" "}
        </div>
      </div>
      <Link onClick={() => localStorage.removeItem("authToken")} to="/login">
        <IconExit />
      </Link>
    </StyledNav>
  );
}
