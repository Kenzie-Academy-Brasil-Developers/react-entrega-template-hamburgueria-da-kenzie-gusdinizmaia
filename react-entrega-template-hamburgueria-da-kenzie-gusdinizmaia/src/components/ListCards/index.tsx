import { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import { Card } from "../Card";
import { StyledList } from "./style";

import { iProduct } from "../../contexts/HomeContext";

interface iListCard {
  array: [] | iProduct[];
}

export function ListCards({ array }: iListCard) {
  const { add } = useContext(HomeContext);

  return (
    <StyledList>
      {array.map((elem) => (
        <Card
          key={elem.id}
          name={elem.name}
          category={elem.category}
          price={elem.price}
          img={elem.img}
          buttonText="Adicionar"
          buttonType="buttonPrimary"
          buttonCallback={() => add(elem)}
        />
      ))}
    </StyledList>
  );
}
