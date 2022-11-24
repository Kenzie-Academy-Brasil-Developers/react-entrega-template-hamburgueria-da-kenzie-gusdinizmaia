import { Button } from "../Button";

export function Total({ price }) {
  function removeAll() {}
  return (
    <div>
      <h3>Total</h3>
      <p>{price}</p>
      <Button onClick={removeAll} text="Remover todos" />
    </div>
  );
}
