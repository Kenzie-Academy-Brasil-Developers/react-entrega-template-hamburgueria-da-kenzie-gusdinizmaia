import { IconCart, IconExit, StyledNav } from "./style";
import { Seach } from "../Seach";

export function NavHeader({ array, page, callback }) {
  return (
    <StyledNav>
      <Seach array={array} page={page} callback={callback} />
      <IconCart />
      <IconExit />
    </StyledNav>
  );
}
