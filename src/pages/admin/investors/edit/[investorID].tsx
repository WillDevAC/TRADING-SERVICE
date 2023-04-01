import React from "react";

import DashboardLayout from "../../../../components/layout/dashboard";

import {
  InvestorContainer,
  InvestorCard,
  InvestorCardsActions,
} from "../../../../template/investors/styles";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { ButtonDefault } from "../../../../template/buttons/buttons";

const edit_investors: React.FC = () => {
  return (
    <DashboardLayout
      title="Editar investidor"
      isBackButton={true}
      urlBackButton="/admin/investors"
    >
      <InvestorContainer>
        <InvestorCard>
          <h3>DADOS DO INVESTIDOR</h3>

          <TextField
            id="outlined-size-small"
            label="Nome completo"
            defaultValue="xxx"
          />

          <TextField
            id="outlined-uncontrolled"
            label="CPF"
            defaultValue="xxx"
          />

          <TextField
            id="outlined-uncontrolled"
            label="Data de nascimento"
            defaultValue="xxx"
          />

          <TextField id="outlined-uncontrolled" label="RG" defaultValue="xxx" />

          <TextField
            id="outlined-uncontrolled"
            label="CEP"
            defaultValue="xxx"
          />

          <TextField
            id="outlined-uncontrolled"
            label="Endereço"
            defaultValue="xxx"
          />
        </InvestorCard>

        <InvestorCard>
          <h3>DADOS DE RENTABILIDADE</h3>
          <TextField
            id="outlined-uncontrolled"
            label="Email"
            defaultValue="xxx"
          />
          <TextField
            id="outlined-uncontrolled"
            label="Rendimento mensal"
            defaultValue="0%"
          />

          <InvestorCardsActions>
            <Button variant="contained">Baixar frente RG</Button>
            <Button variant="contained">Baixar verso RG</Button>
          </InvestorCardsActions>

          <ButtonDefault>ATUALIZAR INVESTIDOR</ButtonDefault>
        </InvestorCard>
      </InvestorContainer>
    </DashboardLayout>
  );
};

export default edit_investors;
