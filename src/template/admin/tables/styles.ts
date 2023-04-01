import styled from 'styled-components';

export const ContainerActionsTable = styled.div`
  display: flex;
  width: 100%;
  min-height: 100px;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
    padding-bottom: 20px;
    margin-top: 5%;
  }

  select {
      padding: 10px;
      color: black;
      font-size: 15px;
      border-radius: 5px;
      outline: none;

      @media(max-width: 800px) {
        width: 100%;
      }
  }

  input {
      padding: 10px;
      font-size: 15px;
      border-radius: 5px;
      
      @media(max-width: 800px) {
        width: 100%;
      }

  }

`;

export const ContainerTable = styled.div `
  div {
    overflow-x:auto;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;

    thead {
        background-color: #0B3B69;
    }
  }

  td {
    text-align: center;
    padding: 8px;
  }

  tr {
    text-align: center;
    padding: 8px;
    color: black;
    font-size: 13.5px;
  }

  th {
    text-align: center;
    padding: 8px;
  }
`

export const ContainerPagination = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1.5%;
  display: flex;
  width: 100%;
  min-height: 50px;
  color: black;
`

export const ContainerTableActions = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    padding: 10px;
    background-color: #DDDDDD;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
      background-color: #8c8c8c;
    }
  }
`

export const ContainerTableActionsButtons = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media(max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }

  button {
    padding: 10px;
    background-color: #DDDDDD;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 15px;

    @media(max-width: 800px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    &:hover{
      background-color: #8c8c8c;
      cursor: pointer;
    }
  }
`