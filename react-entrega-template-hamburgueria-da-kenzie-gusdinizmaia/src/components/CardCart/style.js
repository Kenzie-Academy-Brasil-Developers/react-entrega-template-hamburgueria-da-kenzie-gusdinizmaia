import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import { StyledCard } from "../ListCards/style";

export const StyledCardCart = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px;

  width: 100%;
  min-width: 250px;

  position: relative;

  figure,
  figure > img {
    height: 70px;
    width: 70px;
    border-radius: var(--radius);

    background-color: var(--color-grey-3);
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 10px;

    width: calc(100% - 70px);

    position: relative;

    h1 {
      font: var(--font-title-4);
      color: var(--color-grey-1);
    }
    span {
      font: var(--font-caption);
      color: var(--color-grey-2);
    }
  }
`;

export const IconRemove = styled(MdDelete)`
  position: absolute;
  top: 0;
  right: 0;

  color: var(--color-grey-2);
  cursor: pointer;
`;

export const StyledCount = styled.div`
  display: flex;
  flex-direction: row;

  font: var(--font-body);

  > p {
    background-color: var(--color-grey-3);
    color: var(--color-secondary-1);
    width: 30px;
    text-align: center;

    cursor: pointer;
  }
  > h4 {
    width: 40px;
    text-align: center;
  }
`;
