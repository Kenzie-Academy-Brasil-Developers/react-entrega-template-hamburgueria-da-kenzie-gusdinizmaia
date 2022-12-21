import React from "react";
import { StyledButton } from "./style";
import { MouseEvent } from "react";

interface iButton {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export function Button({
  text,
  onClick,
  buttonType,
  className,
  type,
}: iButton): JSX.Element {
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
