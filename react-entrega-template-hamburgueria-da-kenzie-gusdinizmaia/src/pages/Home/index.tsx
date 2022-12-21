import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { AsideCart } from "../../components/AsideCart";
import { api } from "../../services/api";
import { SectionFilter } from "../../components/SectionFilter";
import { SectionProducts } from "../../components/SectionProducts";

import { StyledHomeMain } from "./style";
import { HomeContext } from "../../contexts/HomeContext";
import { useContext } from "react";

export function Home() {
  // const [products, setproducts] = useState([]);
  // const [filterProducts, setFilterProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  // const [filter, setFilter] = useState(false);

  const { modalCart, pageFilter } = useContext(HomeContext);

  return (
    <React.Fragment>
      <Header />
      <StyledHomeMain>
        {pageFilter ? <SectionFilter /> : <SectionProducts />}
        {modalCart && <AsideCart />}
      </StyledHomeMain>
    </React.Fragment>
  );
}
