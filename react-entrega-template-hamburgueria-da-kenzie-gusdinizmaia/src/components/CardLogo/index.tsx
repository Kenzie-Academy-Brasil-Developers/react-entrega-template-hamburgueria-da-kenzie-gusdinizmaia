import { StyledCard, IconCart } from "./style";

export function CardLogo() {
  return (
    <StyledCard>
      <div>
        <IconCart />
      </div>
      <p>
        A vida é como um sanduíche, é preciso recheá-la com os
        <span> melhores </span>
        ingredientes.
      </p>
    </StyledCard>
  );
}
