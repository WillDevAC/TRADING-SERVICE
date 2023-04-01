import React from "react";

import Layout from "../../components/layout/home";

import Panel from "../../components/home/panel";

import {
  InputDefault,
  InputSelect,
  Label,
} from "../../template/inputs/default";

import { ButtonDefault } from "../../template/buttons/buttons";

const withdraw: React.FC = () => {
  return (
    <Layout type="default">
      <Panel titleHeader="Saque" urlBackButton="/home">
        <Label>Método de saque</Label>

        <InputSelect>
          <option value="1">Pix</option>
          <option value="1">Bitcoin</option>
        </InputSelect>

        <Label>Tipo de chave</Label>
        <InputSelect>
          <option value="1">CPF</option>
          <option value="1">CNPJ</option>
          <option value="1">TELEFONE</option>
        </InputSelect>

        <Label>Quantia</Label>
        <InputDefault type="text" name="cpf" id="cpf" required />

        <Label>Chave</Label>
        <InputDefault type="text" name="cpf" id="cpf" required />

        <ButtonDefault>SOLICITAR</ButtonDefault>
      </Panel>
    </Layout>
  );
};

export default withdraw;
