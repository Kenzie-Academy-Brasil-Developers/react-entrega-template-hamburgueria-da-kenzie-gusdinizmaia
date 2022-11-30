// import { StyledCard } from "./style";
// import style from "./style.module.css";
import { Button } from "../Button";
import { StyledCard } from "./style";

export function Card({
  name,
  category,
  price,
  img,
  buttonText,
  className,
  buttonType,
  buttonCallback,
}) {
  return (
    <StyledCard>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h1>{name}</h1>
        <span>{category}</span>
        <p>
          {price &&
            price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </p>
        <Button
          buttonType={buttonType}
          onClick={buttonCallback}
          text={buttonText}
        />
      </div>
    </StyledCard>
  );
}
