import React, { useState } from "react";

import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";

import Modal from "../../modal";

import {
  ContainerActionsTable,
  ContainerTable,
  ContainerPagination,
  ContainerTableActions,
  ContainerTableActionsButtons,
} from "../../../../template/admin/tables/styles";

import { ModalContainer } from "../../../../template/modal/styles";

import { ButtonDefault } from "../../../../template/buttons/buttons";

const table_administrators: React.FC = () => {
  const [openPopup, setOpenPopup] = useState<Boolean>(false);
  const [openModalAdm, setOpenModalAdm] = useState<Boolean>(false);
  const [openModalAdmEdit, setOpenModalAdmEdit] = useState<Boolean>(false);

  const HandleModalAdministratorAdd = () => {
    setOpenModalAdm(true);
    setOpenPopup(true);
    setOpenModalAdmEdit(false);
  };

  const HandleModalAdministratorEdit = () => {
    setOpenModalAdm(false);
    setOpenModalAdmEdit(true);
    setOpenPopup(true);
  };

  return (
    <>
      <ContainerActionsTable>
        <ContainerTableActionsButtons>
          <select>
            <option value="">Filtrar na tabela</option>
            <option value="">Mais recente</option>
            <option value="">Mais antigo</option>
          </select>
          <button onClick={HandleModalAdministratorAdd}>
            Novo administrador
          </button>
        </ContainerTableActionsButtons>

        <input type="search" placeholder="🔎 Pesquisar" />
      </ContainerActionsTable>

      <ContainerTable>
        <div>
          <table>
            <thead>
              <th>Nome</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Data de nascimento</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <tr>
                <td>WILL SILVA DA ROCHA</td>
                <td>wydemairomsilva@gmail.com</td>
                <td>061.306.422-45</td>
                <td>20/04/1966</td>
                <td>
                  <ContainerTableActions>
                    <button onClick={HandleModalAdministratorEdit}>
                      Editar
                    </button>
                    <button>Excluir</button>
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

      {openModalAdm == true && (
        <Modal openPopup={openPopup} setOpenPopup={setOpenPopup} title="">
          <ModalContainer>
            <h3>NOVO ADMINISTRADOR</h3>

            <TextField id="outlined-uncontrolled" label="Nome completo" />

            <TextField id="outlined-uncontrolled" label="Email" />

            <TextField id="outlined-uncontrolled" label="CPF" />

            <TextField id="outlined-uncontrolled" label="Data de nascimento" />

            <TextField id="outlined-uncontrolled" label="Senha" />

            <ButtonDefault>CADASTRAR</ButtonDefault>
          </ModalContainer>
        </Modal>
      )}

      {openModalAdmEdit == true && (
        <Modal openPopup={openPopup} setOpenPopup={setOpenPopup} title="">
          <ModalContainer>
            <h3>EDITAR ADMINISTRADOR</h3>

            <TextField
              id="outlined-uncontrolled"
              label="Nome completo"
              defaultValue="xxx"
            />

            <TextField
              id="outlined-uncontrolled"
              label="Email"
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

            <TextField id="outlined-uncontrolled" label="Nova senha" />

            <ButtonDefault>EDITAR</ButtonDefault>
          </ModalContainer>
        </Modal>
      )}
    </>
  );
};

export default table_administrators;
