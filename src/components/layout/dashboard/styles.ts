import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: auto;
`;

export const ContainerDashboard = styled.div`
  display: flex;
  height: auto;
  padding-left: 3rem;
  padding-top: 2rem;
  flex-direction: column;
  margin-left: 4%;
  margin-right: 2%;

  @media(max-width: 800px) {
    margin-left: 5%;
    padding-left: 0%;
    justify-content: center;
  }
`;
export const TitleDashboardContent = styled.div `
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  min-height: 50px;
  margin-bottom: 1%;
`

export const TitleDashboard = styled.h1 `
  color: black;
  font-size: 1.9rem;
  @media(max-width: 800px) {
    width: 100%;
    font-size: 1.4rem;
  }
`

export const ContentIcon = styled.div `
  display: flex;
  min-height: 34px;
  min-width: 34px;
  color: black;
  background-color: #0B3B69;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 5px;
  
  cursor: pointer;

  &:hover {
    background-color: #0e2942;
  }
`