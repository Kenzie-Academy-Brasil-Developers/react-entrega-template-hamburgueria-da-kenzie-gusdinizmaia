import React from "react";

export function Input({ placeholder }) {
  return (
    <React.Fragment>
      <input placeholder={placeholder} type="text" />
    </React.Fragment>
  );
}
