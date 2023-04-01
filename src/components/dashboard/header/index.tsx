import React from "react";

import { 
  ContainerHeaderDashboard, 
  SectionDashboardButtons,
  LogoutIcon
} from "./styles";

const header: React.FC = () => {
  return (
    <>
      <ContainerHeaderDashboard>
        <img src="/images/logo-mobile.png" alt="Logo" />

        <SectionDashboardButtons>
          <LogoutIcon/>
        </SectionDashboardButtons>

      </ContainerHeaderDashboard>
    </>
  );
};

export default header;
