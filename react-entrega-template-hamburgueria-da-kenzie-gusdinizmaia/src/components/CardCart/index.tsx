import { Button } from "../Button";
import { StyledCardCart } from "./style";
import { IconRemove } from "../CardCart/style";

interface iCardCart {
  name: string;
  category: string;
  price: number;
  img: string;
  count: number;
  buttonText: string;
  className: string;
  buttonType: string;
  buttonCallback?: (e: React.MouseEvent) => void;
}

export function CardCart({
  name,
  category,
  price,
  img,
  count,
  buttonText,
  className,
  buttonType,
  buttonCallback,
}: iCardCart) {
  return (
    <StyledCardCart>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h1>{name}</h1>
        <span>{category}</span>
        <IconRemove onClick={buttonCallback} />
        <h4>{count}</h4>
      </div>
    </StyledCardCart>
  );
}
