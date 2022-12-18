import { InputForm } from "../InputForm";
import { Button } from "../Button";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function FormRegister() {
  const formRequired = yup.object().shape({
    name: yup.string().required(""),
    email: yup.string().required(""),
    password: yup.string().required(""),
    passwordConfirm: yup.string().required(""),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRequired),
  });

  return (
    <div>
      <h2>Cadastro</h2>
      <Link
        //   text="Cadastrar"
        //   onClick={(e) => navigate("/Login")}
        //   buttonType="buttonGrey"
        to="/login"
      >
        Retornar para o Login
      </Link>
      <form>
        <div>
          <InputForm
            type="text"
            text="Nome"
            placeholder="Escreva seu nome aqui"
            property="name"
          />
        </div>
        <div>
          <InputForm
            type="text"
            text="Email"
            placeholder="Escreva sua email aqui"
            property="email"
          />
        </div>
        <div>
          <InputForm
            type="password"
            text=""
            placeholder="Senha"
            property="password"
          />
        </div>
        <div>
          <InputForm
            type="password"
            text=""
            placeholder="Confirmar Senha"
            property="passwordConfirm"
          />
        </div>
        <Button text="Cadastrar" buttonType="buttonGrey" />
      </form>
    </div>
  );
}
