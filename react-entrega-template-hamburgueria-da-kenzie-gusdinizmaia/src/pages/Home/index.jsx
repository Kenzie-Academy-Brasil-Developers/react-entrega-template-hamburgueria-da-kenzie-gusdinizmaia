import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Cart } from "../../components/Cart";
import { ListCards } from "../../components/ListCards";

import "./style.css";

export function Home() {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((resp) => resp.json())
      .then((resp) => setproducts(resp))
      .catch((err) => console.log(err));
  }, []);

  console.log(products);

  return (
    <React.Fragment>
      <Header />
      <main>
        <ListCards array={setproducts} />
        <Cart array={cart} />
      </main>
    </React.Fragment>
  );
}
