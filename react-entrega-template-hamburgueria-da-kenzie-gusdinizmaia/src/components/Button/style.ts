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

          :hover {
            transition: 0.25s ease-in-out;

            background-color: var(--color-primary-2);
          }
        `;
      case "buttonGrey":
        return css`
          color: var(--color-grey-2);
          font: var(--font-body-bold);

          :hover {
            transition: 0.25s ease-in-out;
            background-color: #bdbdbd;
            color: var(--color-white);
          }
        `;
      case "buttonGrey3":
        return css`
          background-color: #bdbdbd;
          color: var(--color-white);
          font: var(--font-body-bold);

          :hover {
            transition: 0.25s ease-in-out;
            background-color: var(--color-grey-2);
            color: var(--color-grey-4);
          }
        `;

      default:
        return "";
    }
  }}
`;
