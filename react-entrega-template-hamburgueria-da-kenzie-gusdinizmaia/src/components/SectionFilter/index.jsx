import { Button } from "../Button";
import { ListCards } from "../ListCards";
import { StyledSectionFilter } from "./style";

export function SectionFilter({ page, filterName, array, callback }) {
  return (
    <StyledSectionFilter>
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
    </StyledSectionFilter>
  );
}
