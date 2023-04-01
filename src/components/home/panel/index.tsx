import React from "react";

import { SectionPanel, Panel, PanelHeader } from "./styles";

import Link from "next/link";

interface PanelProps {
  titleHeader: string;
  urlBackButton: string;
}

const panel: React.FC<PanelProps> = ({
  children,
  titleHeader,
  urlBackButton,
}) => {
  return (
    <SectionPanel>
      <Panel>
        <PanelHeader>
          <Link href={urlBackButton}>
            <img src="/icons/back.svg" alt="Icone do botão de voltar" />
          </Link>

          <h4>{titleHeader}</h4>
        </PanelHeader>

        {children}
      </Panel>
    </SectionPanel>
  );
};

export default panel;
