import { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import { ListCards } from "../ListCards";
import { StyledSectionProducts } from "./style";

export function SectionProducts() {
  const { products } = useContext(HomeContext);
  return (
    <StyledSectionProducts>
      <ListCards array={products} />
    </StyledSectionProducts>
  );
}
