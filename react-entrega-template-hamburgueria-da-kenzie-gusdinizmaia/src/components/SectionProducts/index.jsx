import { ListCards } from "../ListCards";
import { StyledSectionProducts } from "./style";

export function SectionProducts({ array, callback }) {
  return (
    <StyledSectionProducts>
      <ListCards array={array} callback={callback} />
    </StyledSectionProducts>
  );
}
