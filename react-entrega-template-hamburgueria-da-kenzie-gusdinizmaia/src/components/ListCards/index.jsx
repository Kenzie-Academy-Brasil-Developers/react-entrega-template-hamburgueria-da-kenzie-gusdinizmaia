import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import { StyledList } from "./style";

export function ListCards({ array, callback }) {
  function cardAdd(product) {
    callback((array) => {
      if (array.includes(product)) {
        product.units += 1;
        const newArray = [...array];
        return newArray;
      } else {
        product.units = 1;
        return [...array, product];
      }
    });
  }

  return (
    <StyledList>
      {array.map((elem) => (
        <Card
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
    </StyledList>
  );
}
