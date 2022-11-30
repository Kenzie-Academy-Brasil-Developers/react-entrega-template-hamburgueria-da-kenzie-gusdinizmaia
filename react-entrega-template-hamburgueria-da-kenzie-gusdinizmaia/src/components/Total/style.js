import styled from "styled-components";
import { Button } from "../Button";

export const ButtonTotal = styled(Button)`
  background-color: var(--color-grey-3);
  color: var(--color-grey-2);
  padding: 20px 18px;
`;

export const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  padding: 20px 10px;

  position: relative;

  background-color: var(--color-grey-4);

  > h3 {
    color: var(--color-grey-1);
    font: var(--font-title-3);
  }

  > p {
    position: absolute;

    color: var(--color-grey-2);

    right: 10px;
    top: 20px;
  }
`;
