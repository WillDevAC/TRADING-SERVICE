import React, { useEffect } from "react";

import { MdOutlineContentCopy } from "react-icons/md";

import { MdFilePresent } from "react-icons/md";

import { Container, Title, FlexGroup, FlexGroupQr, List } from "./styles";

import {
  Input,
  InputButton,
  InputFile,
  InputFileDiv,
} from "../../../template/inputs/default";

import { ButtonDefault } from "../../../template/buttons/buttons";

const addfounds: React.FC = () => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  };

  return (
    <Container>
      <Title>
        <h1>Endereço de carteira para o depósito de BTC*</h1>
        <p>Faça com atenção o deposito na carteira bitcoin indicada abaixo.</p>
      </Title>
      <FlexGroup>
        <Input placeholder="Endereço da sua carteira"></Input>
        <InputButton>
          <MdOutlineContentCopy />
        </InputButton>
      </FlexGroup>
      <FlexGroup>
        <Input placeholder="Digite o valor para depositar em BTC"></Input>
      </FlexGroup>
      <FlexGroupQr>
        <img src="images/qrcode.png" alt="" />
        <List>
          <li>1) Envie sua quantia para o endereço acima.</li>
          <li>2) Esse processo pode levar até 72h.</li>
          <li>
            Seu saldo será automaticamente atualizado depois que a nossa equipe
            confirmar sua transação.{" "}
          </li>
        </List>
      </FlexGroupQr>
      <InputFileDiv>
        <InputFile onClick={handleClick}>
          Enviar comprovante <MdFilePresent />
        </InputFile>
        <input
          id="fileSelect"
          onChange={handleChange}
          ref={hiddenFileInput}
          type="file"
          hidden
        />
      </InputFileDiv>
      <ButtonDefault>SOLICITAR DEPOSITO</ButtonDefault>
    </Container>
  );
};

export default addfounds;
