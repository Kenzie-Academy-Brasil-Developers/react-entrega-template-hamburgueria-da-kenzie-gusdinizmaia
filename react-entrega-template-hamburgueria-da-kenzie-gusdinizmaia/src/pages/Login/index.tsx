import { Logo } from "../../components/Logo";
import { ImgRegister } from "../../components/ImgRegister";
import { FormLogin } from "../../components/FormLogin";
import { CardLogo } from "../../components/CardLogo";
import { StyledPageLogin } from "./style";

export function Login() {
  return (
    <StyledPageLogin>
      <section>
        <FormLogin />
      </section>
      <section className="container__logo">
        <Logo />
        <CardLogo />
        <ImgRegister />
      </section>
    </StyledPageLogin>
  );
}
