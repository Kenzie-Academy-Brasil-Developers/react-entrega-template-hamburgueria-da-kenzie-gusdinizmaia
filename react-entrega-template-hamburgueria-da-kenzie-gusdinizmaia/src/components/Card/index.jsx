import { Button } from "../Button";

export function Card({ name, category, price, img }) {
  function teste() {
    return console.log("casa");
  }

  return (
    <li className="card">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <h1>{name}</h1>
      <span>{category}</span>
      <p>{price}</p>
      <Button onClick={teste} text="Adicionar" />
    </li>
  );
}
