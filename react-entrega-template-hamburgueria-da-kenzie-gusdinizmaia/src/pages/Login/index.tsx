import { Logo } from "../../components/Logo";
import { ImgRegister } from "../../components/ImgRegister";
import { FormLogin } from "../../components/FormLogin";
import { CardLogo } from "../../components/CardLogo";
import { StyledPageLogin } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function Login() {
  const { user } = useContext(UserContext);

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
