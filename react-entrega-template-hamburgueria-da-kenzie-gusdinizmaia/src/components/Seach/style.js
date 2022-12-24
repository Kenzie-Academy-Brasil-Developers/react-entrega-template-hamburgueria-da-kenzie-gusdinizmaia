import styled from "styled-components";

export const StyledSearch = styled.div`
  background-color: var(--color-white);
  border-radius: var(--radius);

  display: flex;
  align-items: center;

  position: relative;

  padding: 0 10px;
  > input {
    width: 100%;
    padding-right: 100px;
  }
  > button {
    position: absolute;
    right: 10px;
  }
`;
