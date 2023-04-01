import React from "react";

import {
  ContainerActionsTable,
  ContainerTable,
  ContainerPagination,
  ContainerTableActions,
  ContainerTableActionsButtons
} from "../../../../template/admin/tables/styles";

import Pagination from '@mui/material/Pagination';

const table_deposits: React.FC = () => {
  return (
    <>
      <ContainerActionsTable>
        <ContainerTableActionsButtons>
          <select>
            <option value="">Filtrar na tabela</option>
            <option value="">Mais recentes</option>
            <option value="">Mais antigos</option>
          </select>
        </ContainerTableActionsButtons>

        <input type="search" placeholder="🔎 Pesquisar" />
      </ContainerActionsTable>

      <ContainerTable>
        <div>
          <table>
            <thead>
              <th>Nome do solicitante</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Valor solicitado (R$)</th>
              <th>Saldo atual (R$)</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <tr>
                <td>JOSE EVERALDO DA SILVA</td>
                <td>joseveraldo@gmail.com</td>
                <td>061.306.42-45</td>
                <td>R$ 100.20</td>
                <td>R$ 200.00</td>
                <td>
                  <ContainerTableActions>
                    <button>Baixar comprovante</button>
                    <button>Aceitar déposito</button>
                    <button>Recusar déposito</button>
                  </ContainerTableActions>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContainerTable>

      <ContainerPagination>
        <Pagination count={5} variant="outlined" shape="rounded" />
      </ContainerPagination>
    </>
  );
};

export default table_deposits;
