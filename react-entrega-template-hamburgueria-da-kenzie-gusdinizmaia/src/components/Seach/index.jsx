import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledSearch } from "./style";

export function Seach({ array, page, callback }) {
  const [inputSeach, setSeach] = useState(false);

  function filter(product) {
    if (product) {
      page(() => product);
      callback(() => {
        let newArray = array.filter((elem) => {
          return elem.name
            .slice(0, product.length)
            .toLowerCase()
            .includes(product.toLowerCase());
        });
        return newArray;
      });
    } else {
      callback(() => {
        return [];
      });
    }
  }

  return (
    <StyledSearch>
      <Input
        onChange={(e) => setSeach(e.target.value)}
        placeholder="Digitar Pesquisa"
      />
      <Button
        onClick={(e) => filter(inputSeach)}
        buttonType="buttonPrimary"
        text="Pesquisar"
      />
    </StyledSearch>
  );
}
