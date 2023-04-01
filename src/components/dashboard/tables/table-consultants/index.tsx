import React, { useState } from "react";

import {
  ContainerActionsTable,
  ContainerTable,
  ContainerPagination,
  ContainerTableActions,
  ContainerTableActionsButtons
} from "../../../../template/admin/tables/styles";

import TextField from "@mui/material/TextField";

import Modal from "../../modal";
import Router from "next/router";

import Pagination from '@mui/material/Pagination';

import { ModalContainer } from "../../../../template/modal/styles";
import { ButtonDefault } from "../../../../template/buttons/buttons";


const table_consultants: React.FC = () => {

  const [openPopup, setOpenPopup] = useState(false);
  const [openModalConsultant, setOpenModalConsultant] = useState(false);
  const [openModalConsultantEdit, setOpenModalConsultantEdit] = useState(false);

  const HandleConsultantAddModal = () => {
    setOpenModalConsultant(true);
    setOpenPopup(true);
    setOpenModalConsultantEdit(false);
  };

  const HandleConsultantEditModal = () => {
    setOpenModalConsultant(false);
    setOpenModalConsultantEdit(true);
    setOpenPopup(true);
  };

  return (
    <>
      <ContainerActionsTable>
        <ContainerTableActionsButtons>
          <select>
            <option value="">Filtrar na tabela</option>
            <option value="">Mais convites aceitos</option>
            <option value="">Mais convites gerados</option>
          </select>
          <button onClick={HandleConsultantAddModal}>Novo consultor</button>
        </ContainerTableActionsButtons>

        <input type="search" placeholder="🔎 Pesquisar" />
      </ContainerActionsTable>

      <ContainerTable>
        <div>
          <table>
            <thead>
              <th>Nome</th>
              <th>Email</th>
              <th>Convites aceitos</th>
              <th>Convites pendentes</th>
              <th>Cidade</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <tr>
                <td>JOSE EVERALDO DA SILVA</td>
                <td>joseveraldo@gmail.com</td>
                <td>0</td>
                <td>0</td>
                <td>SÃO JOSE / RS</td>
                <td>
                  <ContainerTableActions>
                    <button onClick={HandleConsultantEditModal}>
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


      {openModalConsultant == true && (
        <Modal openPopup={openPopup} setOpenPopup={setOpenPopup} title="">
          <ModalContainer>
            <h3>NOVO CONSULTOR</h3>

            <TextField id="outlined-uncontrolled" label="Nome completo" />

            <TextField id="outlined-uncontrolled" label="Email" />

            <TextField id="outlined-uncontrolled" label="Senha" />

            <TextField id="outlined-uncontrolled" label="Cidade" />

            <ButtonDefault>CADASTRAR</ButtonDefault>
          </ModalContainer>
        </Modal>
      )}

      {openModalConsultantEdit == true && (
        <Modal openPopup={openPopup} setOpenPopup={setOpenPopup} title="">
          <ModalContainer>
            <h3>EDITAR CONSULTOR</h3>

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
              label="Cidade"
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

export default table_consultants;
