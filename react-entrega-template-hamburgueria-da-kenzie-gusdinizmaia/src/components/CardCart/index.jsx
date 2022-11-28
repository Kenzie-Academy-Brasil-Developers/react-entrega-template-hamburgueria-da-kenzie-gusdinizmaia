import { Button } from "../Button";
import { StyledCardCart } from "./style";

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
}) {
  return (
    <StyledCardCart className={className}>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h1>{name}</h1>
        <span>{category}</span>
        <Button
          buttonType={buttonType}
          onClick={buttonCallback}
          text={buttonText}
        />
        <h4>{count}</h4>
      </div>
    </StyledCardCart>
  );
}
