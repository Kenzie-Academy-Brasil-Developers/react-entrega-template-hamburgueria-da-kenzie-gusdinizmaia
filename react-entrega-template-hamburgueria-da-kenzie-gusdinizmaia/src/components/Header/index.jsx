import { Logo } from "../Logo";
import { NavHeader } from "../NavHeader";
import { StyledHeader } from "./style";

export function Header({ array, page, callback }) {
  return (
    <StyledHeader>
      <Logo />
      <NavHeader array={array} page={page} callback={callback} />
    </StyledHeader>
  );
}
