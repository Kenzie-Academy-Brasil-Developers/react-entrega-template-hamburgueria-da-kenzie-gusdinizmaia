import { InputForm } from "../InputForm";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { StyledFormRegister } from "./style";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function FormRegister() {
  const { user, register: postRegister } = useContext(UserContext);

  const formRequired = yup.object().shape({
    name: yup.string().required("Nome inválido"),
    email: yup.string().required("Email inválido"),
    password: yup
      .string()
      .required("A senha deverá conter mais 6 caracteres")
      .matches("^.{6,}$"),
    passwordConfirm: yup
      .string()
      .required("")
      .oneOf([yup.ref("password")], "Senha incorreta"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRequired),
  });

  function e(data) {
    delete data.passwordConfirm;

    postRegister(data);
  }

  console.log(errors);

  return (
    <div>
      <StyledFormRegister onSubmit={handleSubmit(e)}>
        <h2>Cadastro</h2>
        <Link
          //   text="Cadastrar"
          //   onClick={(e) => navigate("/Login")}
          //   buttonType="buttonGrey"
          to="/login"
        >
          Retornar para o Login
        </Link>
        <InputForm
          type="text"
          text="Nome"
          placeholder="Escreva seu nome aqui"
          property="name"
          register={register}
        />
        <InputForm
          type="text"
          text="Email"
          placeholder="Escreva sua email aqui"
          property="email"
          register={register}
        />
        <InputForm
          type="password"
          text="Senha"
          placeholder="Senha"
          property="password"
          register={register}
        />
        <InputForm
          type="password"
          text="Confirmar Senha"
          placeholder="Confirmar Senha"
          property="passwordConfirm"
          register={register}
        />
        <Button text="Cadastrar" type="submit" buttonType="buttonGrey" />
      </StyledFormRegister>
    </div>
  );
}
