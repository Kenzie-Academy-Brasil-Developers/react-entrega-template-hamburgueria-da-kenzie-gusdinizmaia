import styled from "styled-components";

export const StyledPageLogin = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;

  padding: 0 5%;

  width: 100vw;
  min-height: 100vh;
  max-width: 100%;

  > section {
    width: 50%;
  }

  > .container__logo {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  @media (width <650px) {
    flex-direction: column-reverse;

    padding: 40px 5%;

    section {
      width: 100%;
    }
  }
`;
