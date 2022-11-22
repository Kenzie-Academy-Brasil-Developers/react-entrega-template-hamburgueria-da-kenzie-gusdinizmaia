import React from "react";
import { Total } from "../../components/Total";
import { Button } from "../Button";

export function Cart(array) {
  return (
    <React.Fragment>
      <div>
        {array.map((elem) => (
          <Button />
        ))}
      </div>
      <Total />
    </React.Fragment>
  );
}
