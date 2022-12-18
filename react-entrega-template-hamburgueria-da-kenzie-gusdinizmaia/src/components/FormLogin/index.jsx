import { InputForm } from "../InputForm";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm } from "./style";

export function FormLogin() {
  const navigate = useNavigate();

  const formRequired = yup.object().shape({
    name: yup.string().required("Insira um nome de usuário"),
    password: yup.string().required("Insira uma senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRequired),
  });

  function a() {
    console.log(register);
  }

  console.log(errors);

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(a)}>
        <h2>Login</h2>
        <div>
          <InputForm
            register={register}
            type="text"
            text="Nome"
            placeholder="Escreva seu nome aqui"
            property="name"
          />
        </div>
        <div>
          <InputForm
            register={register}
            type="password"
            text="Senha"
            placeholder="Escreva sua senha aqui"
            property="password"
          />
        </div>
        <Button text="Logar" buttonType="buttonPrimary" />
        <span>Crie sua conta para saborear delícias e matar sua fome!</span>
        <Button
          text="Cadastrar"
          type="submit"
          onClick={(e) => navigate("/register")}
          buttonType="buttonGrey"
        />
      </StyledForm>
    </div>
  );
}
