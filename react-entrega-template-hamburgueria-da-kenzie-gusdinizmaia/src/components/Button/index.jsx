import React from "react";
import { StyledButton } from "./style";

export function Button({ text, onClick, buttonType, className }) {
  return (
    <React.Fragment>
      <StyledButton
        buttonType={buttonType}
        className={className}
        onClick={onClick}
      >
        {text}
      </StyledButton>
    </React.Fragment>
  );
}
