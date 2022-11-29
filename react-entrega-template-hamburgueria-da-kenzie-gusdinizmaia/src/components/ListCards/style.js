import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 15px;

  @media (width < 1024px) {
    flex-wrap: nowrap;

    overflow-x: scroll;
  }
`;
