import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 15px;

  @media (width < 650px) {
    flex-wrap: nowrap;
    padding: 0 20px;
    overflow-x: scroll;
  }
`;
