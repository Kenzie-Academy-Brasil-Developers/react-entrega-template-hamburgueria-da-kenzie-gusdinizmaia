import { Logo } from "../../components/Logo";
import { ImgRegister } from "../../components/ImgRegister";
import { FormRegister } from "../../components/FormRegister";
import { CardLogo } from "../../components/CardLogo";
import { StyledPageRegister } from "./style";

export function Register() {
  return (
    <StyledPageRegister>
      <section className="container__logo">
        <Logo />
        <CardLogo />
        <ImgRegister />
      </section>
      <section>
        <FormRegister />
      </section>
    </StyledPageRegister>
  );
}
