import React from "react";
import { InputBase } from "./style";

export function Input({ placeholder, onChange }) {
  return (
    <React.Fragment>
      <InputBase onChange={onChange} placeholder={placeholder} type="text" />
    </React.Fragment>
  );
}
