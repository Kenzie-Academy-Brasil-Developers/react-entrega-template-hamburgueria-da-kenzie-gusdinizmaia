import styled from "styled-components";
import { StyledPageLogin } from "../Login/style";

export const StyledPageRegister = styled(StyledPageLogin)`
  @media (width <750px) {
    flex-direction: column;
  }
`;
