import React from "react";
import { Total } from "../../components/Total";
import { Button } from "../Button";
import { Card } from "../Card";

export function Cart({ array }) {
  function total() {
    const price = array.reduce((acc, current) => acc + current, 0);
    return price;
  }

  return (
    <React.Fragment>
      <div>
        {array.map((elem) => (
          <Card
            key={elem.id}
            product={elem}
            name={elem.name}
            category={elem.category}
            img={elem.img}
          />
        ))}
      </div>
      <Total price={total()} />
    </React.Fragment>
  );
}
