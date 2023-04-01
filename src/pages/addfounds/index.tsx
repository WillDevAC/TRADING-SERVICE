import React from "react";

import AddFounds from "../../components/home/addfounds";

import Panel from "../../components/home/panel";
import Layout from "../../components/layout/home";

const addfounds: React.FC = () => {
  return (
    <Layout type="default">
      <Panel titleHeader="Adicionar fundos" urlBackButton="/home">
        <AddFounds />
      </Panel>
    </Layout>
  );
};

export default addfounds;
