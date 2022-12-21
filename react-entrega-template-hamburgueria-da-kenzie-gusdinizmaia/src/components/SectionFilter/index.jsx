import { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import { Button } from "../Button";
import { ListCards } from "../ListCards";
import { StyledSectionFilter } from "./style";

export function SectionFilter() {
  const {
    setPageFilter,
    filterProducts,
    setCart,
    pageFilter: filterName,
  } = useContext(HomeContext);

  return (
    <StyledSectionFilter>
      <div className="filter">
        <h1 className="filter__title">
          Resultados para <span>{filterName}</span>
        </h1>
        <Button
          onClick={(e) => setPageFilter(false)}
          buttonType="buttonPrimary"
          text="Limpar busca"
        ></Button>
      </div>
      <ListCards array={filterProducts} callback={setCart} />
    </StyledSectionFilter>
  );
}
