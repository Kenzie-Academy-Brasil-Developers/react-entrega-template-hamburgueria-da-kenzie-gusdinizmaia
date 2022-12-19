import React from "react";
import { StyledButton } from "./style";

interface iButton {
  text: string;
  onClick?: (e: React.MouseEvent) => void;
  buttonType?: string;
  className?: string;
  type: string;
}

export function Button({
  text,
  onClick,
  buttonType,
  className,
  type,
}: iButton) {
  return (
    <React.Fragment>
      <StyledButton
        buttonType={buttonType}
        className={className}
        onClick={onClick}
        type={type}
      >
        {text}
      </StyledButton>
    </React.Fragment>
  );
}
