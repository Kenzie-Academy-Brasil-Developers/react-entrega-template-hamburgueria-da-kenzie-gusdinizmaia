import styled from "styled-components";
import { Card } from "../Card";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;

  border: 2px solid var(--color-grey-3);
  border-radius: var(--radius);

  height: 300px;
  width: 30%;
  min-width: 230px;
  max-width: 300px;

  @media (width < 1300px) {
    width: 48%;
  }

  @media (width < 1024px) {
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;

    padding: 15px;

    height: 60%;

    h1 {
      font: var(--font-title-3);
      color: var(--color-grey-1);
    }
    span {
      font: var(--font-caption);
      color: var(--color-grey-2);
    }
    p {
      font: var(--font-title-4);
      color: var(--color-primary-1);
    }
  }

  figure {
    display: flex;
    align-items: center;

    width: 100%;
    height: 40%;
    background-color: var(--color-grey-4);

    img {
      height: 100%;
      margin: 0 auto;
    }
  }
`;
