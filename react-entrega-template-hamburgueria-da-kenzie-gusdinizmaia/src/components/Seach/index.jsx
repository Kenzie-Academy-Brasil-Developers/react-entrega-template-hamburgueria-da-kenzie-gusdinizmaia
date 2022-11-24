import { Button } from "../Button";
import { Input } from "../Input";

export function Seach() {
  return (
    <div className="seach">
      <Input placeholder="Digitar Pesquisa" />
      <Button text="Pesquisar" />
    </div>
  );
}
