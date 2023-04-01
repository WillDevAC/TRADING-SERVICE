import React from "react";

import LayoutDashboard from "../../components/layout/dashboard";

import {
  DetailsDashboard,
  CardDetails,
  CardValue,
  CardTitle,
  Title
} from "../../template/admin/styles";

import DetailsDate from "../../json/dashboard/detailsCard.json";

import UtilitiesSection from "../../components/dashboard/utilities";
import FinancialSection from "../../components/dashboard/financial";
import AsideMobile from '../../components/dashboard/aside_mobile'

const admin: React.FC = () => {
  return (
    <LayoutDashboard title="Painel interativo">
      <Title>Logado como <b>ADMINISTRADOR.</b></Title>
      
      <DetailsDashboard>
        {DetailsDate.map((item) => (
          <CardDetails>
            <CardValue>{item.value}</CardValue>
            <CardTitle>{item.title}</CardTitle>
          </CardDetails>
        ))}
      </DetailsDashboard>

      <UtilitiesSection />
      <FinancialSection />
      
      { /* please adjust permissions on mobile */ }
      <AsideMobile/>

    </LayoutDashboard>
  );
};

export default admin;
