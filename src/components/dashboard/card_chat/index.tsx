import React, { useState } from "react";

import {
  CardChat,
  CardChatImg,
  CardChatContent,
  CardChatInformations,
  ChatContainerMessages,
  ActionsUserMessage,
  SendMessageAction,
  OtherMessage,
  MyMessage,
} from "./styles";

interface IChat {
  author: string;
  quantity: number;
}

import Button from "@mui/material/Button";

import Modal from "../../../components/dashboard/modal";

import { ModalContainer } from "../../../template/modal/styles";

import { MdSend } from "react-icons/md";

const card_chat: React.FC<IChat> = ({ author, quantity }) => {
  const [openPopup, setOpenPopup] = useState<Boolean>(false);

  return (
    <>
      <CardChat>
        <CardChatImg>
          <img src="/images/chat.png" alt="Logo" />
          <CardChatInformations>
            <p>{author}</p>
            <span>
              <b>{quantity} nova mensagem</b>
            </span>
          </CardChatInformations>
        </CardChatImg>
        <CardChatContent>
          <Button variant="outlined" onClick={() => setOpenPopup(true)}>
            Abrir chat
          </Button>
          <Button variant="outlined" color="error">
            Finalizar
          </Button>
        </CardChatContent>
      </CardChat>

      <Modal openPopup={openPopup} setOpenPopup={setOpenPopup} title="">
        <ModalContainer>
          <h3>CHAT ONLINE</h3>

          <ChatContainerMessages>
            <OtherMessage>
              <p>
                <b>José:</b>
                Como você está?
              </p>
            </OtherMessage>
            <MyMessage>
              <p>
                <b>Você:</b>
                Estou bem e você?
              </p>
            </MyMessage>
          </ChatContainerMessages>

          <ActionsUserMessage>
            <input type="text" placeholder="Digite aqui" />
            <SendMessageAction>
              <MdSend size={25} />
            </SendMessageAction>
          </ActionsUserMessage>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default card_chat;
