// import { StyledCard } from "./style";
// import style from "./style.module.css";
import { Button } from "../Button";
import { StyledCard } from "./style";

interface iCard {
  name: string;
  category: string;
  price: number;
  img: string;
  buttonText: string;
  buttonType: string;
  buttonCallback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Card({
  name,
  category,
  price,
  img,
  buttonText,
  buttonType,
  buttonCallback,
}: iCard) {
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
