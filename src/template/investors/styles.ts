import styled from 'styled-components';

export const InvestorContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  
  @media(max-width: 800px) {
   flex-direction: column;
   padding-top: 3%;
  }

`;

export const InvestorCard = styled.div `
    display: flex;
    min-height: auto;
    background-color: white;
    width: 50%;

    margin-top: 1%;
    border-radius: 10px;
    padding: 2rem;

    flex-direction: column;

    gap: 2rem;

    h3{
        text-align: center;
        width: 100%;
        color: #0B3B69;
    }

    @media(max-width: 800px) {
     padding-top: 10%;
     width: 100%;
    }
`;

export const InvestorCardsActions = styled.div `
    display: flex;
    width: 100%;
    gap: 10px;
`

export const ContentExtractInvestor = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const CardExtract = styled.div `
    display: flex;
    background-color: #f0e68c;
    padding: 5px;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding-left: 1.5%;
    padding-right: 1.5%;

    p{
        color: black;
        font-size: 15px;
    }
`