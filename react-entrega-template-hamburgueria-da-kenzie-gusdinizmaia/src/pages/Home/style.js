import styled from "styled-components";

export const StyledHomeMain = styled.main`
  background-color: var(--color-white);
  padding: 30px 8%;

  @media (width < 750px) {
    flex-direction: column;

    padding: 30px 5%;
    padding-right: 0;
  }
`;
