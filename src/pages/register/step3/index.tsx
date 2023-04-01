import React, { useContext, useState } from "react";

import {
  Container,
  Section,
  DocumentSection,
  DocumentDiv,
  Title,
  Folder,
  SendButtons,
  Form,
  SectionMobile,
} from "../../../template/sign/styles";

import { InputFile } from "../../../template/inputs/default";

import TextField from "@mui/material/TextField";

import { ButtonDefault, ButtonLink } from "../../../template/buttons/buttons";
import { toast } from "react-nextjs-toast";
import Router from "next/router";
import { api } from "../../../services/api";
import dayjs from "dayjs";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const register: React.FC = () => {
  const hiddenFileInput = React.useRef(null);
  const [front, setFront] = useState(null);
  const [back, setBack] = useState(null);
  const hiddenFileInput2 = React.useRef(null);
  const [rg, setRg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleClick2 = (event) => {
    hiddenFileInput2.current.click();
  };

  const handleChange = async (event) => {
    event.preventDefault();
    const url = await handleChangeIMG(event.target.files[0]);
    setFront(url);
  };

  const Input = styled("input")({
    display: "none",
  });

  const handleChange2 = async (event) => {
    event.preventDefault();
    const url = await handleChangeIMG(event.target.files[0]);
    setBack(url);
    console.log(url);
  };

  const handleChangeIMG = async (files: any): Promise<string> => {
    if (files) {
      let formData = new FormData();
      formData.append("img", files);
      formData.append("folder", "register/docs/");
      const res = await api.post("/upload", formData);
      return String(res.data.url);
    }
    return "";
  };

  function RG(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
    return v;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = localStorage.getItem("register-name");
    const cpf = localStorage.getItem("register-cpf");
    const birthDate = localStorage.getItem("register-birthDate");
    const cep = localStorage.getItem("register-cep");
    const address = localStorage.getItem("register-address");
    const number = localStorage.getItem("register-number");

    if (!name || !cpf || !birthDate || !cep || !address || !number) {
      localStorage.clear();
      toast.notify("Dados inválidos", {
        title: "error",
      });
      return Router.replace("/register");
    }
    console.log(hiddenFileInput2.current.files);
    if (!front) {
      return toast.notify("Insira a parte frontal do documento", {
        title: "error",
      });
    }
    if (!back) {
      return toast.notify("Insira a parte traseira do documento", {
        title: "error",
      });
    }
    const docFrontUrl = front;
    const docBackUrl = back;

    const data = {
      email,
      docFrontUrl,
      docBackUrl,
      name,
      cpf,
      rg: rg.replaceAll(".", "").replaceAll("-", ""),
      birthDate,
      password,
      cep,
      address,
      addressNumber: number,
      consultantId: Router?.query?.ref,
    };
    const response = await api.post("/user/register", data);
    if (!!response?.data?.accessToken) {
      localStorage.clear();
      localStorage.setItem("@token", response?.data?.accessToken);
      localStorage.setItem(
        "@timestampToken",
        dayjs(new Date()).toDate().toString()
      );
      Router.push("/home");
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
  };
  return (
    <Container>
      <SectionMobile type="primary" mobile="true">
        <img src="/images/logo.png" alt="Logo" />
      </SectionMobile>

      <Section type="secondary" mobile="false">
        <Form>

          <Title>Documentação</Title>

          <TextField
            id="outlined-textarea"
            label="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            name="email"
            required
          />

          <TextField
            id="outlined-textarea"
            label="Senha"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            name="password"
            required
          />

          <TextField
            id="outlined-textarea"
            label="RG"
            onChange={(e) => {
              if (e.target.value.length <= 12) {
                setRg(RG(e.target.value));
              }
            }}
            value={rg}
            name="rg"
            required
          />

          <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleChange}
                ref={hiddenFileInput}
                hidden
              />
              <Button variant="contained" component="span">
                Frente RG
              </Button>
            </label>
            <label htmlFor="contained-button-file">
              <Input
                id="fileSelect2"
                onChange={handleChange2}
                ref={hiddenFileInput2}
                type="file"
                hidden
              />
              <Button variant="contained" component="span">
                Verso RG
              </Button>
            </label>
          </Stack>

          <ButtonDefault onClick={(e) => onSubmit(e)}>FINALIZAR</ButtonDefault>

          <ButtonLink onClick={() => Router.back()}>VOLTAR</ButtonLink>
        </Form>
      </Section>
    </Container>
  );
};

export default register;
