import { useContext } from "react";
import { HomeContext, iProduct } from "../../contexts/HomeContext";
import { ButtonTotal, StyledTotal } from "./style";

interface iTotal {
  array: iProduct[];
}

export function Total({ array }: iTotal) {
  const { removeAll } = useContext(HomeContext);

  function price(array: iProduct[]) {
    const values = array.map((elem) => elem.price);
    const newArray = values.reduce((item1, item2) => item1 + item2, 0);

    return newArray.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <StyledTotal>
      <h3>Total</h3>
      <p>{price(array)}</p>
      <ButtonTotal
        onClick={() => removeAll()}
        buttonType="buttonPrimary"
        text="Remover todos"
      />
    </StyledTotal>
  );
}
