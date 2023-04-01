import React, { useState } from "react";
import { validate } from "gerador-validador-cpf";
import Router, { useRouter } from "next/router";
import dayjs from "dayjs";
import {
  Container,
  Section,
  Title,
  Form,
  SectionMobile,
} from "../../template/sign/styles";
import { api } from "../../services/api";
import { InputDefault, Label } from "../../template/inputs/default";
import { ButtonDefault, ButtonLink } from "../../template/buttons/buttons";
import { toast } from "react-nextjs-toast";

import TextField from "@mui/material/TextField";

const sign: React.FC = () => {
  const [cpf, setCpf] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { pathname, asPath, push, query } = useRouter();

  //@temporary.
  const HandleFormSubmitRedirect = async (event) => {
    event.preventDefault();
    const unformatCpf = cpf.replaceAll(".", "").replaceAll("-", "");
    if (!validate(unformatCpf)) {
      return toast.notify("CPF inválido", {
        title: "error",
      });
    }
    const response = await api.post("/user/signin", {
      cpf: unformatCpf,
      password: password,
    });

    if (response?.data?.accessToken) {
      localStorage.setItem("@token", response?.data?.accessToken);
      localStorage.setItem(
        "@timestampToken",
        dayjs(new Date()).toDate().toString()
      );
      if (!!query?.url) {
        //@ts-ignore
        Router.push(query?.url);
      } else {
        Router.push("/home");
      }
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
  };

  function CPF(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  return (
    <Container>
      <SectionMobile>
        <img src="images/logo.png" alt="Logo" />
      </SectionMobile>

      <Section>
        <Form onSubmit={HandleFormSubmitRedirect}>
          <Title>Portal de investimentos</Title>

          <TextField
            id="outlined-textarea"
            label="CPF"
            onChange={(e) => {
              if (e.target.value.length <= 14) {
                setCpf(CPF(e.target.value));
              }
            }}
            value={cpf}
            name="cpf"
            required
          />

          <TextField
            id="outlined-size-small"
            label="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="email"
            required
          />
          <ButtonDefault>Acessar</ButtonDefault>
        </Form>
      </Section>
    </Container>
  );
};

export default sign;
