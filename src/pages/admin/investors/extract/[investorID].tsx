import React from "react";

import DashboardLayout from "../../../../components/layout/dashboard";

import {
  ContainerActionsTable,
  ContainerTableActionsButtons,
  ContainerPagination
} from "../../../../template/admin/tables/styles";

import {
  ContentExtractInvestor,
  CardExtract,
} from "../../../../template/investors/styles";

import Pagination from "@mui/material/Pagination";

const investor_extract: React.FC = () => {
  return (
    <DashboardLayout
      title="Extrato individual"
      isBackButton={true}
      urlBackButton="/admin/investors"
    >
      <ContainerActionsTable>
        <ContainerTableActionsButtons>
          <select>
            <option value="">Filtrar no extrato</option>
            <option value="">Ultimos 7 dias</option>
            <option value="">Ultimos 15 dias</option>
            <option value="">Ultimos 30 dias</option>
            <option value="">Todo período</option>
          </select>
        </ContainerTableActionsButtons>

        <input type="search" placeholder="🔎 Pesquisar" />
      </ContainerActionsTable>

      <ContentExtractInvestor>
        <CardExtract>
          <p>ANTONIO OLIVEIRA DA SILVA - DÉPOSITO - R$ 20.00 - EM ANÁLISE</p>
          <p>22/05/2021 00:00</p>
        </CardExtract>
        <CardExtract>
          <p>ANTONIO OLIVEIRA DA SILVA - SAQUE - R$ 20.00 - FINALIZADO</p>
          <p>22/05/2021 00:00</p>
        </CardExtract>
      </ContentExtractInvestor>
      
      <ContainerPagination>
        <Pagination count={5} variant="outlined" shape="rounded" />
      </ContainerPagination>

    </DashboardLayout>
  );
};

export default investor_extract;
