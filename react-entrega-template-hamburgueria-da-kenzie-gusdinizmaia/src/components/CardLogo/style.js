import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px;
  box-shadow: 0px 4px 40px -20px #00000040;
  border: 1px solid #e0e0e0;
  > div {
    background-color: var(--color-primary-2);
    width: min-content;

    padding: 20px;
    border-radius: var(--radius);
  }
  > p {
    font: var(--font-body);
  }
`;

export const IconCart = styled(MdShoppingCart)`
  font-size: 20px;
`;
