import { Logo } from "../../components/Logo";
import { ImgRegister } from "../../components/ImgRegister";
import { FormRegister } from "../../components/FormRegister";
import { CardLogin } from "../../components/CardLogin";
import { StyledPageRegister } from "./style";

export function Register() {
  return (
    <StyledPageRegister>
      <section>
        <Logo />
        <CardLogin />
        <ImgRegister />
      </section>
      <section>
        <FormRegister />
      </section>
    </StyledPageRegister>
  );
}
