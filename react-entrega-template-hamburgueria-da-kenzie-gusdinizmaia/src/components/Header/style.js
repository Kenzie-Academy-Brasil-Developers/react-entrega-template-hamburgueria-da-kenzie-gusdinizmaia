import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey-4);
  height: 80px;
  padding: 0 8%;
  border-bottom: 1px solid var(--color-grey-3);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (width < 1024px) {
    padding: 0 5%;
  }

  @media (width < 750px) {
    gap: 15px;

    padding: 20px 5%;

    position: sticky;
    top: 0;
  }
`;
