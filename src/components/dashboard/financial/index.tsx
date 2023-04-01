import React, { useState } from "react";

import { TitleFinancial, FinancialActions } from "./styles";

import { GrMoney } from "react-icons/gr";
import { GiBanknote } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";

import Modal from "../modal";
import TextField from "@mui/material/TextField";

import { ModalContainer } from "../../../template/modal/styles";
import { ButtonDefault } from "../../../template/buttons/buttons";

import Router from "next/router";


const financial: React.FC = () => {
  const [openPopup, setOpenPopup] = useState<Boolean>(false);

  return (
    <>
      <TitleFinancial>Financeiro</TitleFinancial>

      <FinancialActions>
        <button onClick={() => Router.push("/admin/withdrawal")}>
          <div>
            <GiBanknote size={25} color="black" />
          </div>
          Solicitações de saque
        </button>

        <button onClick={() => Router.push("/admin/deposit")}>
          <div>
            <AiFillSafetyCertificate size={25} color="black" />
          </div>
          Solicitações de déposito
        </button>

        <button onClick={() => setOpenPopup(true)}>
          <div>
            <GrMoney size={25} color="black" />
          </div>
          Definir rendimentos
        </button>
      </FinancialActions>
      
      <Modal openPopup={openPopup} setOpenPopup={setOpenPopup} title="">
        <ModalContainer>
          <h3>ATUALIZAR RENDIMENTOS MENSAIS (GERAL)</h3>

          <TextField id="outlined-uncontrolled" label="Novo rendimento (%)" />

          <ButtonDefault>ATUALIZAR</ButtonDefault>
        </ModalContainer>
      </Modal>

    </>
  );
};

export default financial;
