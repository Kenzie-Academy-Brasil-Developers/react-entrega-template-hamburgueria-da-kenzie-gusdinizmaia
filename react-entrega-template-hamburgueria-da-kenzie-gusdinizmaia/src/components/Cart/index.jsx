import React from "react";
import { Total } from "../../components/Total";
import { CardCart } from "../CardCart";

import "./style.css";

export function Cart({ array, callback }) {
  function cartRemove(indexDelete) {
    callback((cart) => cart.filter((elem, index) => index !== indexDelete));
  }

  return (
    <React.Fragment>
      <h1 className="cart__title">Carrinho de Compras</h1>
      <ul className="list__cart">
        {array.length > 0 ? (
          array.map((elem, index) => (
            <CardCart
              key={index}
              name={elem.name}
              category={elem.category}
              img={elem.img}
              count={elem.units}
              buttonText="Remover"
              buttonType="buttonGrey"
              buttonCallback={(e) => cartRemove(index)}
            />
          ))
        ) : (
          <div className="no__items">
            <h1>Sua sacola está vazia</h1>
            <h2>Adicione Itens</h2>
          </div>
        )}
      </ul>
      {array.length > 0 && <Total array={array} callback={callback} />}
    </React.Fragment>
  );
}
