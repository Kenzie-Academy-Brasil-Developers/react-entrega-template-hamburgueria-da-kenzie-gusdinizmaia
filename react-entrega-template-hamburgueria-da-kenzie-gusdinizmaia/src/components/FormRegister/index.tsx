import { InputForm } from "../InputForm";
import { Button } from "../Button";
import { StyledFormRegister, StyledLink } from "./style";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface iFormRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

export function FormRegister() {
  const { register: postRegister } = useContext(UserContext);

  const formRequired = yup.object().shape({
    name: yup.string().required("Nome inválido"),
    email: yup.string().required("Email inválido"),
    password: yup
      .string()
      .required("A senha deverá conter mais 6 caracteres")
      .matches(/^.{6,}$/),
    passwordConfirm: yup
      .string()
      .required("")
      .oneOf([yup.ref("password")], "Senha incorreta"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegister>({
    resolver: yupResolver(formRequired),
  });

  const submit: SubmitHandler<iFormRegister> = (data) => {
    delete data.passwordConfirm;

    postRegister(data);
  };

  return (
    <div>
      <StyledFormRegister onSubmit={handleSubmit(submit)}>
        <h2>Cadastro</h2>
        <StyledLink to="/login">Retornar para o Login</StyledLink>
        <InputForm
          type="text"
          text="Nome"
          property="name"
          placeholder="Escreva aqui seu nome ..."
          register={register}
          errorMessage={errors}
        />
        <InputForm
          type="text"
          text="Email"
          placeholder="Escreva aqui seu email..."
          property="email"
          register={register}
          errorMessage={errors}
        />
        <InputForm
          type="password"
          text="Senha"
          placeholder="Escreva aqui sua senha..."
          property="password"
          register={register}
          errorMessage={errors}
        />
        <InputForm
          type="password"
          text="Confirmar Senha"
          placeholder="Escreva novamente sua senha..."
          property="passwordConfirm"
          register={register}
          errorMessage={errors}
        />
        <Button text="Cadastrar" type="submit" buttonType="buttonGrey" />
      </StyledFormRegister>
    </div>
  );
}
