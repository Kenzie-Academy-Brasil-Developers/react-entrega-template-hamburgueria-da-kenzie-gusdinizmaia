import { useContext, useState } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledSearch } from "./style";

export function Seach() {
  const [inputSeach, setSeach] = useState(false);
  const { setPageFilter, filter } = useContext(HomeContext);

  // function filter(product) {
  //   console.log(product);
  // }

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
