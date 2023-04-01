import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 6rem;

  border-radius: 0.3rem;

  cursor: pointer;

  border-left: 6px solid #0b3b69;

  box-shadow: var(#0000, 0 0 #0000), var(#0000, 0 0 #0000), var(#0000);

  //@Mobile
  @media (max-width: 411px) {
    height: 5.9rem;
  }

  &:hover {
    background-color: #fcfcfc;
  }
`;

export const SectionImage = styled.div`
  display: flex;
  margin: 10px;
  width: 5%;
  align-items: center;
  justify-content: center;

  //@Mobile
  @media (max-width: 800px) {
    width: 15%;
  }
`;

export const SectionDescription = styled.div`
  display: flex;
  margin: 10px;
  width: 95%;
  flex-direction: column;

  p {
    margin-top: 0.8rem;
    color: black;
    font-size: 1.1rem;
    font-weight: bold;
    font-family: "arial";
  }

  div {
    color: grey;
    font-size: 0.8rem;
    margin-top: 0.7rem;
  }

  //@Mobile
  @media (max-width: 800px) {
    width: 80%;
    span {
      font-size: 15px;
    }
  }
`;
