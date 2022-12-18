import React from "react";

export function InputForm({ text, type, register, placeholder, property }) {
  return (
    <React.Fragment>
      <label htmlFor={text}>{text}</label>
      <input
        {...register(property)}
        type={type}
        placeholder={placeholder}
        id={text}
      />
    </React.Fragment>
  );
}
