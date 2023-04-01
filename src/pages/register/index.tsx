import React, { useState } from "react";

import {
  Container,
  Section,
  Title,
  Form,
  SectionMobile,
} from "../../template/sign/styles";

import { InputDefault, Label } from "../../template/inputs/default";

import { ButtonDefault, ButtonLink } from "../../template/buttons/buttons";

import TextField from "@mui/material/TextField";

import Router from "next/router";
import dayjs from "dayjs";

const register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");


  function CPF(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function DATA(mask, number) {
    number = number.replace(/[^\d]/g, "");
    var s = "" + number,
      r = "";
    for (var im = 0, is = 0; im < mask.length && is < s.length; im++) {
      r += mask.charAt(im) == "X" ? s.charAt(is++) : mask.charAt(im);
    }
    return r;
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("register-name", name);
    localStorage.setItem(
      "register-cpf",
      cpf.replaceAll(".", "").replaceAll("-", "")
    );
    const parsedDate = birthDate.split("/");
    const newDate = new Date(
      `${parsedDate[2]}-${parsedDate[1]}-${parsedDate[0]}`
    );
    localStorage.setItem("register-birthDate", newDate.toDateString());
    Router.push(`/register/step2?ref=${Router.query?.ref}`);
  };

  return (
    <Container>
      <SectionMobile type="primary" mobile="true">
        <img src="/images/logo.png" alt="Logo" />
      </SectionMobile>

      <Section type="secondary" mobile="false">
        <Form onSubmit={onSubmit}>
          <Title>Registre-se</Title>

          <TextField
            id="nome"
            label="Nome completo"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="nome"
            required
          />

          <TextField
            id="cpf"
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
            id="nascimento"
            label="Data de nascimento"
            onChange={(e) => {
              if (e.target.value.length <= 10) {
                //@ts-ignore
                setBirthDate(DATA("XX/XX/XXXX", e.target.value));
              }
            }}
            value={birthDate}
            name="nascimento"
            required
          />

          <ButtonDefault>CONTINUAR</ButtonDefault>
        </Form>
      </Section>
    </Container>
  );
};

export default register;
