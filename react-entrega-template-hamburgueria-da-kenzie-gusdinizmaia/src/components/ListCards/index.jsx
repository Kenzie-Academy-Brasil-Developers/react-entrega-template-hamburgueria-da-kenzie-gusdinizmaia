import React from "react";
import { StyledCard } from "./style";

import "./style.css";

export function ListCards({ array, callback }) {
  function cardAdd(product) {
    callback((array) => {
      return [...array, product];
    });
  }

  return (
    <ul className="list__products">
      {array.map((elem) => (
        <StyledCard
          key={elem.id}
          name={elem.name}
          category={elem.category}
          price={elem.price}
          img={elem.img}
          buttonText="Adicionar"
          buttonType="buttonPrimary"
          buttonCallback={(e) => cardAdd(elem)}
        />
      ))}
    </ul>
  );
}
