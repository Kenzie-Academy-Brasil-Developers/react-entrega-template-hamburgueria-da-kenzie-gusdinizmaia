import styled from "styled-components";

export const StyledSectionProducts = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (width < 750px) {
    margin-top: 40px;
  }
`;
