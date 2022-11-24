import React from "react";
import { Card } from "../Card";

export function ListCards({ array }) {
  array((array) => {
    console.log(array);
  });
  return (
    <React.Fragment>
      {/* {array.map((elem) => (
        <Card
          key={elem.id}
          product={elem}
          name={elem.name}
          category={elem.category}
          price={elem.price}
          img={elem.img}
        />
      ))} */}
    </React.Fragment>
  );
}
