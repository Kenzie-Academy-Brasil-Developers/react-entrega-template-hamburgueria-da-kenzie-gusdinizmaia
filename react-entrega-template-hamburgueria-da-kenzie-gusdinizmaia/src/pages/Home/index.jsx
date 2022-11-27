import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Cart } from "../../components/Cart";
import { ListCards } from "../../components/ListCards";
import { api } from "../../services/api";

import { Button } from "../../components/Button";

import "./style.css";
import userEvent from "@testing-library/user-event";

export function Home() {
  const [products, setproducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    function getProducts() {
      api
        .get("products")
        .then((resp) => setproducts(resp.data))
        .catch((err) => console.log(err));
    }
    getProducts();
  }, []);

  return (
    <React.Fragment>
      <Header page={setFilter} array={products} callback={setFilterProducts} />
      <main className="home__main">
        {filter ? (
          <section className="container__products">
            <div>
              <h1>Resultados para {filter}</h1>
              <Button
                onClick={(e) => setFilter(false)}
                buttonType="buttonPrimary"
                text="Limpar busca"
              ></Button>
            </div>
            <ListCards array={filterProducts} callback={setCart} />
          </section>
        ) : (
          <section className="container__products">
            <ListCards array={products} callback={setCart} />
          </section>
        )}
        <aside className="container__cart">
          <Cart array={cart} callback={setCart} />
        </aside>
      </main>
    </React.Fragment>
  );
}
