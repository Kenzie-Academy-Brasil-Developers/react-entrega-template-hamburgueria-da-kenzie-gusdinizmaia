import { StyledCardCart } from "./style";
import { IconRemove } from "../CardCart/style";
import { iProduct } from "../../contexts/HomeContext";

interface iCardCart {
  name: string;
  category: string;
  price?: number;
  img: string;
  count: number;
  elem: iProduct;
  elemIndex: number;
  buttonAdd: (elem: iProduct) => void;
  buttonRemove: (elemIndex: number) => void;
}

export function CardCart({
  name,
  category,
  img,
  count,
  elem,
  elemIndex,
  buttonAdd,
  buttonRemove,
}: iCardCart) {
  return (
    <StyledCardCart>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h1>{name}</h1>
        <span>{category}</span>
        <div>
          <p onClick={() => buttonRemove(elemIndex)}>{"<"}</p>
          <h4>{count}</h4>
          <p onClick={() => buttonAdd(elem)}>{">"}</p>
        </div>
      </div>
    </StyledCardCart>
  );
}
