import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Cart } from "../../components/Cart";
import { api } from "../../services/api";
import { Filter } from "../../components/SectionFilter";
import { Products } from "../../components/SectionProducts";

import "./style.css";

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
          <Filter
            page={setFilter}
            filterName={filter}
            array={filterProducts}
            callback={setCart}
          />
        ) : (
          <Products array={products} callback={setCart} />
        )}
        <Cart array={cart} callback={setCart} />
      </main>
    </React.Fragment>
  );
}
