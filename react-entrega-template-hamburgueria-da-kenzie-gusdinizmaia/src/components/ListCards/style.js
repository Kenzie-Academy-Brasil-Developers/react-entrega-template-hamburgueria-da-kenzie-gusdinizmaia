import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  gap: 15px;

  @media (width < 750px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    padding-right: 20px;
    overflow-x: scroll;
    gap: 25px;
  }
`;
