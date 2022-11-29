import { Button } from "../Button";
import { ListCards } from "../ListCards";

export function Filter({ page, filterName, array, callback }) {
  return (
    <section className="container__products">
      <div className="filter">
        <h1 className="filter__title">
          Resultados para <span>{filterName}</span>
        </h1>
        <Button
          onClick={(e) => page(false)}
          buttonType="buttonPrimary"
          text="Limpar busca"
        ></Button>
      </div>
      <ListCards array={array} callback={callback} />
    </section>
  );
}
