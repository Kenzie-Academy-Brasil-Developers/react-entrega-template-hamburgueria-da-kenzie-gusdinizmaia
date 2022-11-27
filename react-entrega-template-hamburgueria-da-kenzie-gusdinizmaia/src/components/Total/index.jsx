import { Button } from "../Button";

export function Total({ array, callback }) {
  function removeAll() {
    callback(() => []);
  }

  function price(array) {
    const values = array.map((elem) => elem.price);

    const newArray = values.reduce((item1, item2) => item1 + item2, 0);

    return newArray.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return (
    <div>
      <h3>Total</h3>
      <p>{price(array)}</p>
      <Button
        onClick={(e) => removeAll()}
        buttonType="buttonPrimary"
        text="Remover todos"
      />
    </div>
  );
}
