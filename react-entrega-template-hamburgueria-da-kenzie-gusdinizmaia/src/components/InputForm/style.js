import styled from "styled-components";

export const StyledInput = styled.div`
  position: relative;
  padding-top: 8px;

  > label {
    font: var(--font-body);

    position: absolute;
    top: 1px;
    left: 15px;
    padding: 0 3px;

    background-color: var(--color-white);
  }

  > input {
    border: 1px solid black;
    width: 100%;
    padding: 20px 15px;
    border-radius: var(--radius);
  }
`;
