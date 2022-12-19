import React, { useContext } from "react";
import { Total } from "../../components/Total";
import { HomeContext } from "../../contexts/HomeContext";
import { CardCart } from "../CardCart";
import { ContainerCart, NoItems, StyledWrapper, IconClose } from "./style";

export function AsideCart({ array, callback }) {
  const { setModalCart } = useContext(HomeContext);

  function cartRemove(indexDelete) {
    callback((cart) => cart.filter((elem, index) => index !== indexDelete));
  }

  return (
    <React.Fragment>
      <StyledWrapper>
        <ContainerCart>
          <div className="cart__header">
            <h1 className="cart__title">Carrinho de Compras</h1>
            <IconClose onClick={(e) => setModalCart(false)} />
          </div>
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
              <NoItems className="no__items">
                <h1>Sua sacola está vazia</h1>
                <h2>Adicione Itens</h2>
              </NoItems>
            )}
          </ul>
          {array.length > 0 && <Total array={array} callback={callback} />}
        </ContainerCart>
      </StyledWrapper>
    </React.Fragment>
  );
}
