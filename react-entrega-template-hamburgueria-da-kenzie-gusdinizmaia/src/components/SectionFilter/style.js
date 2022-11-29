import styled from "styled-components";
import { StyledSectionProducts } from "../SectionProducts/style";

export const StyledSectionFilter = styled(StyledSectionProducts)`
  .filter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      font: var(--font-title-1);
      span {
        color: var(--color-grey-2);
      }
    }
  }

  @media (width < 1024px) {
    padding-left: 5%;
    .filter {
      padding-right: 5%;
    }
  }
`;
