import React from "react";
import { InputBase } from "./style";

interface iInput {
  placeholder: string;
  onChange: (value: any) => void;
}

export function Input({ placeholder, onChange }: iInput) {
  return (
    <React.Fragment>
      <InputBase onChange={onChange} placeholder={placeholder} type="text" />
    </React.Fragment>
  );
}
