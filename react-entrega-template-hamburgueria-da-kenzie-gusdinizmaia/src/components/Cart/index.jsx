import React from "react";
import { Total } from "../../components/Total";
import { StyledCardCart } from "./style";

import "./style.css";

export function Cart({ array, callback }) {
  function cartRemove(indexDelete) {
    callback((cart) => cart.filter((elem, index) => index !== indexDelete));
  }

  return (
    <React.Fragment>
      <h1 className="cart__title">Carrinho de Compras</h1>
      <ul className="list__cart">
        {array.map((elem, index) => (
          <StyledCardCart
            key={index}
            name={elem.name}
            category={elem.category}
            img={elem.img}
            buttonText="Remover"
            buttonType="buttonGrey"
            buttonCallback={(e) => cartRemove(index)}
          />
        ))}
      </ul>
      <Total array={array} callback={callback} />
    </React.Fragment>
  );
}
