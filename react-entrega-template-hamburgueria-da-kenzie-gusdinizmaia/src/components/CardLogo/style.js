import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px;
  box-shadow: 0px 4px 40px -20px #00000040;
  border: 1px solid #e0e0e0;
  border-radius: var(--radius);

  > div {
    background-color: #27ae601a;
    width: min-content;

    padding: 20px;
    border-radius: var(--radius);
  }
  > p {
    font: var(--font-body);
    color: var(--color-grey-2);
    line-height: 22px;
    span {
      font: var(--font-body-bold);
    }
  }
`;

export const IconCart = styled(MdAddShoppingCart)`
  font-size: 20px;
  color: var(--color-primary-1);
`;
