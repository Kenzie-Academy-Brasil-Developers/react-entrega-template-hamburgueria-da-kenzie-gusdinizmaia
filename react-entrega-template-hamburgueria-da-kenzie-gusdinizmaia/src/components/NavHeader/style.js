import styled from "styled-components";
import { MdShoppingCart, MdExitToApp, MdSearch } from "react-icons/md";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  > .count__products {
    position: relative;
    cursor: pointer;

    :hover svg {
      color: #bdbdbd;
    }

    div {
      background-color: var(--color-primary-1);
      height: 18px;
      width: 18px;
      position: absolute;
      top: -8px;
      right: -3px;
      border-radius: var(--radius);

      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font: var(--font-body-bold);
        color: var(--color-white);

        :hover .count__products {
          color: black;
        }
      }
    }
  }
`;

export const IconCart = styled(MdShoppingCart)`
  color: var(--color-grey-3);
  font-size: 27px;
`;
export const IconExit = styled(MdExitToApp)`
  cursor: pointer;
  color: var(--color-grey-3);
  font-size: 27px;
  :hover {
    color: #bdbdbb;
  }
`;

export const IconSearch = styled(MdSearch)`
  cursor: pointer;
  color: var(--color-grey-3);
  font-size: 27px;
  :hover {
    color: #bdbdbb;
  }
`;
