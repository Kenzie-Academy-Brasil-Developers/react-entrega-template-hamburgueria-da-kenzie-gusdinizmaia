import { MdClose, MdSearch } from "react-icons/md";
import styled, { keyframes } from "styled-components";

interface iSearchProps {
  width: number;
  animation?: boolean;
}

export const inputTransition = keyframes`
  
      0% {
          transform: translateY(-80px);
      }
      100% {
          transform: translateY(0px);
      }
  
  `;
export const inputNoTransition = keyframes`
  
  0% {
      transform: translateY(0px);
  }
  100% {
      transform: translateY(-80px);
  }

`;

export const StyledSearch = styled.div`
  border-radius: var(--radius);
  padding: 0 15px;

  display: flex;
  align-items: center;

  position: relative;
  animation: ${({ animation, width }: iSearchProps) =>
      width < 750 ? (animation ? inputTransition : inputNoTransition) : ""}
    0.85s ease alternate;

  > input {
    background-color: var(--color-white);
    width: 100%;
  }

  @media (width < 750px) {
    position: fixed;
    left: 0;

    width: 100%;
    z-index: 2;
  }
`;

export const IconSearchInput = styled(MdSearch)`
  position: absolute;
  right: 25px;

  background-color: var(--color-primary-1);
  color: var(--color-white);

  font-size: 20px;
  height: 35px;
  width: 35px;
  padding: 7px;
  border-radius: var(--radius);
  cursor: pointer;
`;

export const IconClose = styled(MdClose)`
  position: absolute;
  right: 70px;
  font-size: 20px;

  cursor: pointer;
`;
