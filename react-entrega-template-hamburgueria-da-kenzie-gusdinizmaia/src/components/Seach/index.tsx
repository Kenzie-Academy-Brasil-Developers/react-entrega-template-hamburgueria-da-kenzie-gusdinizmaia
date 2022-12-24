import { useContext, useState } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledSearch } from "./style";

export function Seach() {
  const [inputSeach, setSeach] = useState(null);
  const { filter } = useContext(HomeContext);

  return (
    <StyledSearch>
      <Input
        onChange={(e) => setSeach(e.target.value)}
        placeholder="Digitar Pesquisa"
      />
      <Button
        onClick={(e) => {
          filter(inputSeach);
        }}
        buttonType="buttonPrimary"
        text="Pesquisar"
      />
    </StyledSearch>
  );
}
