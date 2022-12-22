import { InputForm } from "../InputForm";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface iFormLogin {
  email: string;
  password: string;
}

export function FormLogin() {
  const navigate = useNavigate();

  const { login } = useContext(UserContext);

  const formRequired = yup.object().shape({
    email: yup.string().required("Insira um nome de usuário"),
    password: yup.string().required("Insira uma senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({
    resolver: yupResolver(formRequired),
  });

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(login)}>
        <h2>Login</h2>
        <div>
          <InputForm
            register={register}
            type="text"
            text="Email"
            placeholder="Escreva seu email aqui..."
            property="email"
            errorMessage={errors}
          />
        </div>
        <div>
          <InputForm
            register={register}
            type="password"
            text="Senha"
            placeholder="Escreva sua senha aqui..."
            property="password"
            errorMessage={errors}
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
