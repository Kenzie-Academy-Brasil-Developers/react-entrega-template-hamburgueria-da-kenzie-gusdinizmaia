import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;

  border: 2px solid var(--color-grey-3);
  border-radius: var(--radius);

  height: 300px;
  width: 30%;
  min-width: 230px;
  max-width: 300px;

  :focus-within {
    transition: 0.25 ease;
    border: var(--color-primary-1) solid 2px;
  }

  @media (width < 1300px) {
    width: 48%;
  }

  @media (width < 750px) {
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
    > button {
      :focus {
        transition: 0.25 ease-in-out;
        background-color: var(--color-primary-1);
      }
    }
  }

  figure {
    display: flex;
    align-items: center;

    width: 100%;
    height: 40%;
    background-color: var(--color-grey-4);

    border-radius: 6px 6px 0 0;

    img {
      height: 100%;
      margin: 0 auto;
    }
  }
`;
