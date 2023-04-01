import styled from "styled-components";

import { IoFolderOpenOutline } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;

  //@Mobile
  @media (max-width: 800px) {
    flex-direction: column;
    background-color: white;
    flex-direction: column;
  }

  overflow: hidden;
`;

export const Information = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export const Folder = styled(IoFolderOpenOutline)`
  color: #0B3B69;
  font-size: 4rem;
`;

export const DocumentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e3e4e8;
  border-radius: 5px;
  padding: 30px 30px;
  gap: 35px;
  height: 30%;

  p{
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    align-items: center;
    width: 100%;
    font-weight: bold;
  }
`;

export const DocumentDiv = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 30px;

  h1, p {
    text-align: center;
    color: #0B3B69;
  }
  
  h1 {
    @media screen and (max-width: 1130px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 830px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 300px) {
      font-size: 1rem;
    }
  }
`;

export const SendButtons = styled(DocumentDiv)`
  flex-direction: row;
  height: 15px;
  
  @media screen and (max-width: 910px) {
    flex-direction: column;
  }

  @media screen and (max-width: 800px) {
    flex-direction: row;
  }

  @media screen and (max-width: 300px) {
    flex-direction: column;
  }

  a {
    width: 100%;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 50%;
  flex-direction: column;

  //@Mobile
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const SectionMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0b3b69;
  height: 100%;
  width: 50%;

  //@Mobile
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Title = styled.h2`
  color: black;
  font-size: 1.9rem;
  padding-bottom: 1.5rem;

  //@Mobile
  @media (max-width: 800px) {
    font-size: 2.1rem;
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  display: flex;
  height: 50%;
  width: 50%;
  justify-content: center;

  //@Mobile
  @media (max-width: 800px) {
    width: 73%;
  }
`;
