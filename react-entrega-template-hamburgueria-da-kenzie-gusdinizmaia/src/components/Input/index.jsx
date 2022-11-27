import React from "react";

export function Input({ placeholder, onChange }) {
  return (
    <React.Fragment>
      <input onChange={onChange} placeholder={placeholder} type="text" />
    </React.Fragment>
  );
}
