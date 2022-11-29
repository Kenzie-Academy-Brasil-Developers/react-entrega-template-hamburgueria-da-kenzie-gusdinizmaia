import { ListCards } from "../ListCards";

export function Products({ array, callback }) {
  return (
    <section className="container__products">
      <ListCards array={array} callback={callback} />
    </section>
  );
}
