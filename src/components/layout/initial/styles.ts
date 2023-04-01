import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;

  //@Mobile
  @media (max-width: 800px) {
    flex-direction: column;
    background-color: white;
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

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 50%;

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
