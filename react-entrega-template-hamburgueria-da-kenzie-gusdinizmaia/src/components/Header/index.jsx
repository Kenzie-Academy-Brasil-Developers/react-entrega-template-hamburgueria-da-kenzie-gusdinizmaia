import { Logo } from "../Logo";
import { NavHeader } from "../NavHeader";
import { StyledHeader } from "./style";

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavHeader />
    </StyledHeader>
  );
}
