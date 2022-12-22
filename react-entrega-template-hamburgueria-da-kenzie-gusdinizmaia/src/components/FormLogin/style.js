import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  box-shadow: 0px 0px 30px -20px #00000040;
  border: 2px solid #f5f5f5;
  padding: 20px;
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
