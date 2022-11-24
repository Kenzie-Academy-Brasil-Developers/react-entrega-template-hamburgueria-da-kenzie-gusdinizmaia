import React from "react";

export function Button({ text, onClick }) {
  return (
    <React.Fragment>
      <button onClick={onClick}>{text}</button>
    </React.Fragment>
  );
}
