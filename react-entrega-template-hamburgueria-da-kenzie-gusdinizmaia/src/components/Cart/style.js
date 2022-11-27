import styled from "styled-components";
import { StyledCard } from "../ListCards/style";

export const StyledCardCart = styled(StyledCard)`
  flex-direction: row;
  padding: 10px;
  height: auto;

  border: 0;

  figure {
    height: 70px;
    width: 70px;
    border-radius: var(--radius);

    background-color: var(--color-grey-3);
  }

  div {
    align-items: flex-start;
    padding: 10px;
    width: 100%;

    position: relative;

    h2 {
      font: var(--font-title-4);
    }
    p {
      display: none;
    }

    button {
      position: absolute;

      right: 10px;
      top: 10px;
    }
  }
`;
