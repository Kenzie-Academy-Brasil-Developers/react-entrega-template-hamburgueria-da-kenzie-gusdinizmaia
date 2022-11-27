import { Logo } from "../Logo";
import { NavHeader } from "../NavHeader";

import "./style.css";

export function Header({ array, page, callback }) {
  return (
    <header className="home__header">
      <Logo />
      <NavHeader array={array} page={page} callback={callback} />
    </header>
  );
}
