import React from "react";
import { Header } from "../../components/Header";
import { AsideCart } from "../../components/AsideCart";
import { SectionFilter } from "../../components/SectionFilter";
import { SectionProducts } from "../../components/SectionProducts";

import { StyledHomeMain } from "./style";
import { HomeContext } from "../../contexts/HomeContext";
import { useContext } from "react";

export function Home() {
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
