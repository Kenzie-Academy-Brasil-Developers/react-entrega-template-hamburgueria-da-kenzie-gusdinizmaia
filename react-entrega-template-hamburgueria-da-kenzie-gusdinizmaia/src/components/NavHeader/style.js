import styled from "styled-components";
import { MdShoppingCart, MdExitToApp } from "react-icons/md";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
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
