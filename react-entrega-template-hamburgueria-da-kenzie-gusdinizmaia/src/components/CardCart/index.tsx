import { StyledCardCart } from "./style";
import { IconRemove } from "../CardCart/style";
import { iProduct } from "../../contexts/HomeContext";
import { StyledCount } from "./style";

interface iCardCart {
  name: string;
  category: string;
  price?: number;
  img: string;
  count: number;
  elem: iProduct;
  buttonAdd: (elem: iProduct) => void;
  buttonRemove: (elemIndex: number) => void;
  buttonRemoveItem: (elem: iProduct) => void;
}

export function CardCart({
  name,
  category,
  img,
  count,
  elem,
  buttonAdd,
  buttonRemove,
  buttonRemoveItem,
}: iCardCart) {
  return (
    <StyledCardCart>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h1>{name}</h1>
        <span>{category}</span>
        <StyledCount>
          <p onClick={() => buttonRemove(elem.id)}>{"-"}</p>
          <h4>{count}</h4>
          <p onClick={() => buttonAdd(elem)}>{"+"}</p>
        </StyledCount>
        <IconRemove onClick={() => buttonRemoveItem(elem)} />
      </div>
    </StyledCardCart>
  );
}
