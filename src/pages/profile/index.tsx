import React, { useEffect, useState } from "react";

import Layout from "../../components/layout/home";

import Panel from "../../components/home/panel";

import { ContainerProfile } from "../../template/profile/styles";
import { toast } from "react-nextjs-toast";
import { InputDefault, Label } from "../../template/inputs/default";
import { ButtonDefault } from "../../template/buttons/buttons";
import { api } from "../../services/api";

interface IData {
  name: string;
  rg: string;
  cpf: string;
  birthDate: string;
}
const profile: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [password, setPassword] = useState<string>("");
  const getData = async () => {
    const response = await api.get("/user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (!!response.data.id) {
      setData(response.data);
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
  };

  useEffect(() => {
    if (typeof window != undefined) {
      getData();
    }
  }, [typeof window]);

  function CPF(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function RG(v: string) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
    return v;
  }

  const onSubmit = async () => {
    const response = await api.put(
      "/user/edit-password",
      {
        password: password,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!!response.data.id) {
      toast.notify("Senha alterada com sucesso!", {
        title: "Sucesso",
      });
      setPassword("")
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
  };

  return (
    <Layout type="default">
      <Panel titleHeader="Meu perfil" urlBackButton="/home">
        <Label>Nome completo</Label>
        <InputDefault value={data?.name} type="text" disabled />

        <Label>CPF</Label>
        <InputDefault value={CPF(data?.cpf || "")} type="text" disabled />

        <Label>Data de nascimento</Label>
        <InputDefault value={data?.birthDate} type="text" disabled />

        <Label>RG</Label>
        <InputDefault value={RG(data?.rg || "")} type="text" disabled />

        <Label>Nova Senha</Label>

        <InputDefault
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Digite uma nova senha"
        />

        <ButtonDefault onClick={onSubmit}>ATUALIZAR</ButtonDefault>
      </Panel>
    </Layout>
  );
};

export default profile;
