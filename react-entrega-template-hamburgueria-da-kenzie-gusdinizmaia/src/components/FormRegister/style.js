import styled from "styled-components";
import { StyledForm } from "../FormLogin/style";
import { Link } from "react-router-dom";

export const StyledFormRegister = styled(StyledForm)`
  position: relative;
  > a {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--color-grey-2);
  font: var(--font-body);
  text-decoration: underline;
`;
