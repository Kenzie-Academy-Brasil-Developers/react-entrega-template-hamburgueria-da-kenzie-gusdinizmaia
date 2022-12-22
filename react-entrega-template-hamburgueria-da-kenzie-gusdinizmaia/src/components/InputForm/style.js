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
    font: var(--font-body);

    border: 1.75px solid black;
    width: 100%;
    padding: 17px 15px;
    border-radius: var(--radius);
  }

  > p {
    position: relative;
    top: 10px;
    font: var(--font-body);
    color: var(--color-negative);
  }
`;
