import React from "react";
import { StyledInput } from "./style";

export function InputForm({ text, type, register, placeholder, property }) {
  return (
    <StyledInput>
      <label htmlFor={text}>{text}</label>
      <input {...register(property)} type={type} placeholder={placeholder} />
    </StyledInput>
  );
}
