import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import { 
  Container, 
  ContainerIcons, 
  ChatIcon, 
  ExitIcon,
  CardChat,
  CardChatImg,
  CardChatContent,
  CardChatInformations,
  ChatContainerMessages,
  ActionsUserMessage,
  SendMessageAction,
  OtherMessage,
  MyMessage
} from "./styles";

import { MdSend } from "react-icons/md";

import { ModalContainer } from "../../../template/modal/styles";

import Modal from "../modal";
interface props {
  type?: string;
}

const header = ({ type }) => {
  const [openPopup, setOpenPopup] = useState<Boolean>(false);

  return (
    <>
      <Container>
        <img src="/images/logo-mobile.png" alt="Logo" />

        <ContainerIcons type={type}>
          <ChatIcon onClick={() => setOpenPopup(true)} />
          <div
            onClick={() => {
              localStorage.clear();
              Router.push("/login");
            }}
          >
            <ExitIcon />
          </div>
        </ContainerIcons>
      </Container>

      <Modal openPopup={openPopup} setOpenPopup={setOpenPopup} title="">
        <ModalContainer>
          <h3>SUPORTE ONLINE</h3>
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

export default header;
