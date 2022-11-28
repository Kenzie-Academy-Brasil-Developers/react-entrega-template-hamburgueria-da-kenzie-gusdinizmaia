import styled from "styled-components";

export const InputBase = styled.input`
  padding: 20px 10px;
  border-radius: var(--radius);
  font: var(--font-headline);

  & :placeholder {
    color: var(--color-grey-3);
  }
`;
