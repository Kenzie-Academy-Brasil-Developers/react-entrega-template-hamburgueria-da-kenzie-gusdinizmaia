import { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import { Button } from "../Button";
import { ListCards } from "../ListCards";
import { StyledSectionFilter } from "./style";

export function SectionFilter() {
  const {
    setPageFilter,
    filterProducts,
    pageFilter: filterName,
  } = useContext(HomeContext);

  return (
    <StyledSectionFilter>
      <div className="filter">
        <h1 className="filter__title">
          Resultados para <span>{filterName}</span>
        </h1>
        <Button
          onClick={() => setPageFilter(null)}
          buttonType="buttonPrimary"
          text="Limpar busca"
        ></Button>
      </div>
      <ListCards array={filterProducts} />
    </StyledSectionFilter>
  );
}
