import React, { useState } from 'react';

import { 
    TitleUtilities,
    UtilitiesActions
} from './styles';

import { RiUserStarFill } from "react-icons/ri";
import { BiLinkAlt } from "react-icons/bi";
import { SiGnuprivacyguard } from 'react-icons/si'

import Modal from "../modal";
import TextField from "@mui/material/TextField";

import { ModalContainer } from "../../../template/modal/styles";
import { ButtonDefault } from "../../../template/buttons/buttons";

import Router from 'next/router'

const utilities: React.FC = () => {

  const [openPopup, setOpenPopup] = useState<Boolean>(false);

  return (
  <>
    <TitleUtilities>Utilidades</TitleUtilities>

    <UtilitiesActions>

      <button onClick={() => Router.push('/admin/invitations')}>
        <div>
          <RiUserStarFill size={25} color="black" />
        </div>
        Meus convidados
      </button>

      <button onClick={() => setOpenPopup(true)}>
        <div>
          <BiLinkAlt size={25} color="black" />
        </div>
        Gerar link de convite
      </button>

      <button onClick={() => Router.push('/admin/registers')}>
        <div>
          <SiGnuprivacyguard size={25} color="black" />
        </div>
        Solicitações de cadastro
      </button>
      
    </UtilitiesActions>

    <Modal openPopup={openPopup} setOpenPopup={setOpenPopup} title="">
        <ModalContainer>
          <h3>NOVO LINK DE CONVITE</h3>

          <TextField id="outlined-uncontrolled" label="Nome do investidor" />
          <TextField id="outlined-uncontrolled" label="Cidade do investidor" />
          <TextField id="outlined-uncontrolled" label="Consultor" disabled value="xxx"/>

          <ButtonDefault>GERAR LINK</ButtonDefault>
        </ModalContainer>
      </Modal>

  </>
  );
}

export default utilities;