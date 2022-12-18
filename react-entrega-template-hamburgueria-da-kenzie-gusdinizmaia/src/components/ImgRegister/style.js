import styled from "styled-components";

export const StyledImg = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 3fr);
  gap: 15px;

  width: 50%;

  div {
    width: 3px;
    height: 3px;

    background-color: var(--color-grey-3);
    padding: 3px;
    border-radius: 100%;
  }
`;
