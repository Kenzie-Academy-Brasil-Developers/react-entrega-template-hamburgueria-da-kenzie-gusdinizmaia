import { Logo } from "../Logo";
import { NavHeader } from "../NavHeader";

import "./style.css";

export function Header() {
  return (
    <header className="home__header">
      <Logo />
      <NavHeader />
    </header>
  );
}
