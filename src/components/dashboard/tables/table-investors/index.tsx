import React from "react";

import {
  ContainerActionsTable,
  ContainerTable,
  ContainerPagination,
  ContainerTableActions,
  ContainerTableActionsButtons,
} from "../../../../template/admin/tables/styles";

import listInvestors from "../../../../json/dashboard/Investors.json";

import Pagination from "@mui/material/Pagination";

import Router from "next/router";

const table_investors: React.FC = () => {
  return (
    <>
      <ContainerActionsTable>
        <ContainerTableActionsButtons>
          <select>
            <option value="">Filtrar na tabela</option>
            <option value="">Mais recente</option>
            <option value="">Menos recente</option>
          </select>
          <button onClick={() => Router.push('investors/add')}>Novo investidor</button>
        </ContainerTableActionsButtons>

        <input type="search" placeholder="🔎 Pesquisar" />
      </ContainerActionsTable>

      <ContainerTable>
        <div>
          <table>
            <thead>
              <th>Nome completo</th>
              <th>Patrimonio total</th>
              <th>Rendimento mensal</th>
              <th>Rendimento diário</th>
              <th>Consultor</th>
              <th>Ações</th>
            </thead>
            <tbody>
              {listInvestors.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.patrimony}</td>
                  <td>{user.monthly_income}%</td>
                  <td>{user.daily_income}%</td>
                  <td>{user.consultant}</td>
                  <td>
                    <ContainerTableActions>
                      
                      <button onClick={() => Router.push("investors/edit/1")}>
                        Editar
                      </button>

                      <button>Excluir</button>

                      <button onClick={() => Router.push("investors/extract/1")}>
                        Extrato
                      </button>

                    </ContainerTableActions>
                  </td>
                </tr>
              ))}
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

export default table_investors;
