import styled from "styled-components";
import { MdShoppingCart, MdExitToApp } from "react-icons/md";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  position: relative;
  > .count__products {
    background-color: var(--color-primary-1);
    height: 18px;
    width: 18px;
    position: absolute;
    top: 6px;
    right: 42px;
    border-radius: var(--radius);

    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font: var(--font-body-bold);
      color: var(--color-white);
    }
  }
`;

export const IconCart = styled(MdShoppingCart)`
  cursor: pointer;
  color: var(--color-grey-3);
  font-size: 30px;
`;
export const IconExit = styled(MdExitToApp)`
  cursor: pointer;
  color: var(--color-grey-3);
  font-size: 30px;
`;
