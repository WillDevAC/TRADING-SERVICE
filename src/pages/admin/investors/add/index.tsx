import React from "react";

import DashboardLayout from "../../../../components/layout/dashboard";

import {
  InvestorContainer,
  InvestorCard,
  InvestorCardsActions,
} from "../../../../template/investors/styles";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { styled } from '@mui/material/styles';

import { ButtonDefault } from "../../../../template/buttons/buttons";

const Input = styled('input')({
  display: 'none',
});

const add_investors: React.FC = () => {
  return (
    <DashboardLayout
      title="Novo investidor"
      isBackButton={true}
      urlBackButton="/admin/investors"
    >
      <InvestorContainer>
        <InvestorCard>
          <h3>DADOS DO INVESTIDOR</h3>

          <TextField id="outlined-size-small" label="Nome completo" />

          <TextField id="outlined-uncontrolled" label="CPF" />

          <TextField id="outlined-uncontrolled" label="Data de nascimento" />

          <TextField id="outlined-uncontrolled" label="RG" />

          <TextField id="outlined-uncontrolled" label="CEP" />

          <TextField id="outlined-uncontrolled" label="Endereço" />
        </InvestorCard>

        <InvestorCard>
          <h3>DADOS DE LOGIN</h3>
          <TextField id="outlined-uncontrolled" label="Email" />
          <TextField id="outlined-uncontrolled" label="Senha" />

          <InvestorCardsActions>

            <label htmlFor="contained-button-file">
              <Input id="contained-button-file" multiple type="file"/>
              <Button variant="contained" component="span"> Anexar frente RG</Button>
            </label>

            <label htmlFor="contained-button-file">
              <Input id="contained-button-file" multiple type="file"/>
              <Button variant="contained" component="span"> Anexar verso RG</Button>
            </label>

          </InvestorCardsActions>

          <ButtonDefault>CADASTRAR</ButtonDefault>
        </InvestorCard>
      </InvestorContainer>
    </DashboardLayout>
  );
};

export default add_investors;
