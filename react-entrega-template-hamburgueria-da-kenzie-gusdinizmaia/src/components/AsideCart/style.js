import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const ContainerCart = styled.div`
  padding-bottom: 10px;

  display: flex;
  flex-direction: column;

  min-width: 280px;
  width: 50%;
  max-width: 540px;
  border-radius: var(--radius);

  position: relative;

  > .cart__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-primary-1);
    color: var(--color-white);
    padding: 20px;
    border-radius: var(--radius) var(--radius) 0 0;
    > h1 {
      font: var(--font-title-3);

      width: 100%;
      border-radius: 6px 6px 0 0;
    }
  }
  ul {
    background-color: var(--color-grey-4);
    border-radius: 0 0 6px 6px;
    padding: 0;
  }

  @media (width < 650px) {
    padding: 0 5%;
    width: 80%;
  }
`;

export const NoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 40px 0;

  h1 {
    font: var(--font-title-3);
    color: var(--color-grey-1);
  }
  h2 {
    font: var(--font-title-4);
    color: var(--color-grey-2);
  }
`;

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  padding-top: 60px;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-grey-wrapper);
`;

export const IconClose = styled(MdClose)`
  cursor: pointer;
  font-size: 20px;
`;
