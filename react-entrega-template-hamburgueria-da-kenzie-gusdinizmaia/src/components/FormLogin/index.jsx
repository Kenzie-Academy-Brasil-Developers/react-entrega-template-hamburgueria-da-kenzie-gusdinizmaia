import { InputForm } from "../InputForm";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function FormRegister() {
  const navigate = useNavigate();

  const formRequired = yup.object().shape({
    name: yup.string().required(""),
    password: yup.string().required(""),
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
      <h2>Login</h2>
      <form onSubmit={handleSubmit(a)}>
        <div>
          <InputForm
            register={register}
            type="text"
            text="Nome"
            placeholder="Escreva seu nome aqui"
          />
        </div>
        <div>
          <InputForm
            register={register}
            type="password"
            text="Senha"
            placeholder="Escreva sua senha aqui"
          />
        </div>
        <Button text="Logar" buttonType="buttonPrimary" />
      </form>
      <span>Crie sua conta para saborear delícias e matar sua fome!</span>
      <Button
        text="Cadastrar"
        type="submit"
        onClick={(e) => navigate("/register")}
        buttonType="buttonGrey"
      />
    </div>
  );
}
