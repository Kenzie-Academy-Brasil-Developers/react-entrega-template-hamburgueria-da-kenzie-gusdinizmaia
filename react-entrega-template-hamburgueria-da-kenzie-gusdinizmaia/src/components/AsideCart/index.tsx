import React, { useContext } from "react";
import { Total } from "../../components/Total";
import { HomeContext } from "../../contexts/HomeContext";
import { CardCart } from "../CardCart";
import { ContainerCart, NoItems, StyledWrapper, IconClose } from "./style";

import { iProduct } from "../../contexts/HomeContext";

export function AsideCart() {
  const { setModalCart, cart, remove, add } = useContext(HomeContext);
  // const [cartProductsFilter, setCartProductsFilter] = useState(null);
  // const [count, setCount] = useState(null);

  function filterCart() {
    const filter = cart.filter((elem, index) => cart.indexOf(elem) === index);
    return filter;
  }

  function countProducts(product: iProduct) {
    const countProduct = cart.filter((elem) => elem === product);
    return countProduct.length;
  }

  return (
    <React.Fragment>
      <StyledWrapper>
        <ContainerCart>
          <div className="cart__header">
            <h1 className="cart__title">Carrinho de Compras</h1>
            <IconClose onClick={() => setModalCart(false)} />
          </div>
          <ul className="list__cart">
            {cart.length > 0 ? (
              filterCart().map((elem, index) => (
                <CardCart
                  key={index}
                  name={elem.name}
                  category={elem.category}
                  img={elem.img}
                  count={countProducts(elem)}
                  elem={elem}
                  elemIndex={index}
                  buttonAdd={add}
                  buttonRemove={remove}
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
