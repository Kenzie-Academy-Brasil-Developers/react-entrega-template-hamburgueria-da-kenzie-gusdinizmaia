import { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import { ButtonTotal, StyledTotal } from "./style";

export function Total({ array }) {
  const { removeAll } = useContext(HomeContext);

  function price(array) {
    const values = array.map((elem) => elem.price * elem.units);

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
