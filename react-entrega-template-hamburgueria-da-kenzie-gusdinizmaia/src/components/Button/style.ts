import styled, { css } from "styled-components";

interface iStyledButton {
  buttonType: string;
}

export const StyledButton = styled.button<iStyledButton>`
  padding: 14px 18px;
  font: var(--font-body-bold);
  border-radius: var(--radius);
  cursor: pointer;

  ${({ buttonType }) => {
    switch (buttonType) {
      case "buttonPrimary":
        return css`
          background-color: var(--color-primary-1);
          color: var(--color-white);
          font: var(--font-body-bold);
        `;
      case "buttonGrey":
        return css`
          color: var(--color-grey-2);
          font: var(--font-body-bold);
        `;

      default:
        return "";
    }
  }}
`;
