import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { AsideCart } from "../../components/AsideCart";
import { api } from "../../services/api";
import { SectionFilter } from "../../components/SectionFilter";
import { SectionProducts } from "../../components/SectionProducts";

import { StyledHomeMain } from "./style";

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
      <StyledHomeMain>
        {filter ? (
          <SectionFilter
            page={setFilter}
            filterName={filter}
            array={filterProducts}
            callback={setCart}
          />
        ) : (
          <SectionProducts array={products} callback={setCart} />
        )}
        <AsideCart array={cart} callback={setCart} />
      </StyledHomeMain>
    </React.Fragment>
  );
}
