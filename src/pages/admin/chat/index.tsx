import React from "react";

import LayoutDashboard from "../../../components/layout/dashboard";

import {
  ContainerActionsTable,
  ContainerTableActionsButtons,
  ContainerPagination
} from "../../../template/admin/tables/styles";

import { ContainerChat } from '../../../template/admin/chat/styles'

import CardChat from '../../../components/dashboard/card_chat'
import Pagination from "@mui/material/Pagination";

const chat: React.FC = () => {
  return (
    <LayoutDashboard title="Chats" urlBackButton="/admin" isBackButton={true}>

      <ContainerActionsTable>
        <ContainerTableActionsButtons>
          <select>
            <option value="">Filtrar chats</option>
            <option value="">Mais recente</option>
            <option value="">Mais antigo</option>
          </select>
        </ContainerTableActionsButtons>

        <input type="search" placeholder="🔎 Pesquisar chats" />
      </ContainerActionsTable>

      <ContainerChat>
        <CardChat author="José araujo ferreira de souza" quantity={1}/>
        <CardChat author="Roberto araujo ferreira de souza" quantity={3}/>
        <CardChat author="Roberto araujo ferreira de souza" quantity={3}/>
        <CardChat author="Roberto araujo ferreira de souza" quantity={3}/>
      </ContainerChat>

      <ContainerPagination>
        <Pagination count={5} variant="outlined" shape="rounded" />
      </ContainerPagination>

    </LayoutDashboard>
  );
};

export default chat;
