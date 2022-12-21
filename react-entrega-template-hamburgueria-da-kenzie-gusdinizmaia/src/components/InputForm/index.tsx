import { forwardRef, InputHTMLAttributes } from "react";
import { StyledInput } from "./style";

interface iInputForm extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  register: any;
  property: string;
  errorMessage: any;
}

export const InputForm = forwardRef<HTMLInputElement, iInputForm>(
  (
    { text, register, property, placeholder, errorMessage, type, ...rest },
    ref
  ) => {
    return (
      <StyledInput>
        <label htmlFor={property}>{text}</label>
        <input
          {...register(property)}
          placeholder={placeholder}
          id={property}
          type={type}
        />
        {errorMessage[property] && <p>{errorMessage[property].message}</p>}
      </StyledInput>
    );
  }
);
