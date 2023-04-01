import styled from 'styled-components';

export const ContainerChat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: center;
  justify-content: flex-start;
`;

export const CardChat = styled.div `
    display: flex;
    width: 100%;
    min-height: 120px;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    padding-left: 3%;
    padding-right: 3%;
    border-radius: 5px;    

    @media(max-width: 800px) {
        flex-direction: column;
    }

`

export const CardChatImg = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height: 100px;
        border-radius: 30px;
    }

`

export const CardChatContent = styled.div `

    display: flex;
    gap: 10px;

    @media(max-width: 800px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 5%;
        padding-bottom: 5%;
    }
`

export const CardChatInformations = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    p{
        color: black;
        font-weight: 550;
        text-transform: capitalize;
    }

    span{
        color: gray;

        b{
            background-color: green;
            border-radius: 30px;
            color: white;
            padding: 5px
        }

    }
`

export const ChatContainerMessages = styled.div `
  display: flex;
  width: 100%;
  border: 1px solid black;
  height: 350px;
  border-radius: 5px;
  padding: 5%;
  flex-direction: column;
  gap: 10px;

  overflow: auto;
  


`

export const ActionsUserMessage = styled.div `
  display: flex;
  background-color: #f4f4f4;
  min-height: 70px;

  align-items: center;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 2%;

  border-radius: 10px;

  input {
      width: 85%;
      border: none;
      background-color: #f4f4f4;
      outline: none;
  }
  
`

export const SendMessageAction = styled.div `
    display: flex;
    width: 54px;
    height: 54px;
    background-color: #0b3b69;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: #0d2c4a;
    }

`

export const OtherMessage = styled.div `
    display: flex;
    width: 100%;
    justify-content: flex-start;
    background-color: #e6e6e6;
    min-height: auto;
    padding: 3%;
    border-radius: 10px;
    border-radius: 0 15px 15px 15px;

    p{
        display: flex;
        width: 90%;
        flex-direction: column;
        font-size: 0.8rem;

        @media(max-width: 800px) {
            font-size: 0.8rem;
        }

    }
`

export const MyMessage = styled.div `
    display: flex;
    width: 100%;
    justify-content: start;
    padding: 3%;

    background-color: #b8dc73;

    border-radius: 15px 0 15px 15px;

    p{
        display: flex;
        width: 90%;
        flex-direction: column;
        font-size: 0.8rem;

        @media(max-width: 800px) {
        font-size: 0.8rem;
    }

    }

`