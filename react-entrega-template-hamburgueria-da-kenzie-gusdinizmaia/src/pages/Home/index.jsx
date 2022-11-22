import React from "react";
import { Header } from "../../components/Header";
import { Cart } from "../../components/Cart";
import { ListCards } from "../../components/ListCards";

export function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <ListCards />
        <Cart />
      </main>
    </React.Fragment>
  );
}