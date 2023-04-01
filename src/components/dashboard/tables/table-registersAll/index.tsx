import React from "react";

import {
  ContainerActionsTable,
  ContainerTable,
  ContainerPagination,
  ContainerTableActions,
  ContainerTableActionsButtons
} from "../../../../template/admin/tables/styles";

import Pagination from '@mui/material/Pagination';

const table_registersAll: React.FC = () => {
  return (
    <>
      <ContainerActionsTable>
        <ContainerTableActionsButtons>
          <select>
            <option value="">Filtrar na tabela</option>
            <option value="">Mais recente</option>
            <option value="">Mais antigo</option>
          </select>
        </ContainerTableActionsButtons>

        <input type="search" placeholder="🔎 Pesquisar" />
      </ContainerActionsTable>

      <ContainerTable>
        <div>
          <table>
            <thead>
              <th>Nome do convidado</th>
              <th>Status</th>
              <th>Consultor</th>
              <th>Link de convite</th>
              <th>Cidade</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <tr>
                <td>JOSE EVERALDO DA SILVA</td>
                <td>AGUARDANDO CADASTRO</td>
                <td>MARCELO LIMA FERREIRA</td>
                <td>http://tradingservice.com.br/register/</td>
                <td>RIO BRANCO / AC</td>
                <td>
                  <ContainerTableActions>
                    <button>Baixar documentação</button>
                    <button>Cancelar convite</button>
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

export default table_registersAll;
