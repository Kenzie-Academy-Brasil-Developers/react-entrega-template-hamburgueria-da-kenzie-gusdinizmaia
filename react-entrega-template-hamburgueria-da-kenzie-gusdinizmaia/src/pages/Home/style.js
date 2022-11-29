import styled from "styled-components";

export const StyledHomeMain = styled.main`
  background-color: var(--color-white);
  padding: 30px 8%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  /* .container__products {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 25px;
  } */
  /* .filter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
  } */

  @media (width < 1024px) {
    flex-direction: column;

    padding: 30px 0;
  }
`;
