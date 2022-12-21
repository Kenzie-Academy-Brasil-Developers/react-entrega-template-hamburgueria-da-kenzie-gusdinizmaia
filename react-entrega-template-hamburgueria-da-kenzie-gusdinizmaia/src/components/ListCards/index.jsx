import { useState } from "react";
import { Card } from "../Card";
import { StyledList } from "./style";

export function ListCards({ array, callback }) {
  function cardAdd(product, array) {
    callback((cart) => {
      const productCart = cart.find((elem) => elem.id === product.id);

      if (productCart) {
        const newProduct = {
          ...product,
          others: [...productCart.others, { ...product }],
        };

        console.log(newProduct);

        return [...cart, newProduct];
      } else {
        const newProduct = { ...product, others: [{ ...product }] };

        console.log(newProduct);

        return [...cart, newProduct];
      }
    });
  }

  console.log(array);

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
          buttonCallback={(e) => cardAdd(elem, array)}
        />
      ))}
    </StyledList>
  );
}
