import styled from 'styled-components';

export const TitleFinancial = styled.span`
  padding-top: 2%;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;

  @media(max-width: 800px) {
    font-size: 1.3rem;
    padding-top: 5%;
    padding-bottom: 4%;
    font-size: 1.2rem;
  }

`;

export const FinancialActions = styled.div`
  display: flex;
  min-height: 100px;
  align-items: center;
  gap: 10px;

  @media(max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 95%;
  }

  button {
    display: flex;
    padding: 1rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background-color: #0b3b69;
    color: white;
    border: none;
    border-radius: 10px;

    @media(max-width: 800px) {
      font-size: 0.9rem;
      width: 100%;
      justify-content: flex-start;
    }

    gap: 10px;

    font-size: 14px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      background-color: white;
      border-radius: 30px;
    }

    &:hover {
      background-color: #0e1924;
    }
  }
`;