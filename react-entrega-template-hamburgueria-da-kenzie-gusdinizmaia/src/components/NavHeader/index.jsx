import { Seach } from "../Seach";

export function NavHeader({ array, page, callback }) {
  return (
    <nav>
      <Seach array={array} page={page} callback={callback} />
    </nav>
  );
}
