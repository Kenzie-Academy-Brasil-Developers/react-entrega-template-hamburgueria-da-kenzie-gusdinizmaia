import React, { useContext } from "react";
import { Total } from "../../components/Total";
import { HomeContext } from "../../contexts/HomeContext";
import { CardCart } from "../CardCart";
import { ContainerCart, NoItems, StyledWrapper, IconClose } from "./style";

export function AsideCart() {
  const { setModalCart, cart, remove } = useContext(HomeContext);

  return (
    <React.Fragment>
      <StyledWrapper>
        <ContainerCart>
          <div className="cart__header">
            <h1 className="cart__title">Carrinho de Compras</h1>
            <IconClose onClick={(e) => setModalCart(false)} />
          </div>
          <ul className="list__cart">
            {cart.length > 0 ? (
              cart.map((elem, index) => (
                <CardCart
                  key={index}
                  name={elem.name}
                  category={elem.category}
                  img={elem.img}
                  count={elem.units}
                  buttonText="Remover"
                  buttonType="buttonGrey"
                  buttonCallback={(e) => remove(index)}
                />
              ))
            ) : (
              <NoItems className="no__items">
                <h1>Sua sacola está vazia</h1>
                <h2>Adicione Itens</h2>
              </NoItems>
            )}
          </ul>
          {cart.length > 0 && <Total array={cart} />}
        </ContainerCart>
      </StyledWrapper>
    </React.Fragment>
  );
}
