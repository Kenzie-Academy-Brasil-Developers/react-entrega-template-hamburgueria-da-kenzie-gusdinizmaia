import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 18px;
  font: var(--font-body-bold);
  border-radius: var(--radius);
  cursor: pointer;

  ${({ buttonType }) => {
    switch (buttonType) {
      case "buttonPrimary":
        return css`
          background-color: var(--color-primary-1);
          color: var(--color-white);
        `;
      case "buttonGrey":
        return css`
          color: var(--color-grey-2);
          padding: 0;

          font: var(--font-caption);
        `;

      default:
        return "";
    }
  }}
`;
