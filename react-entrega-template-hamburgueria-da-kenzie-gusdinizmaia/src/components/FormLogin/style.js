import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font: var(--font-title-2);
  }

  > div {
    width: 100%;
  }

  span {
    color: var(--color-grey-2);
    font: var(--font-body);

    align-self: center;
  }

  > button {
    width: 100%;
  }
`;
