import styled from "styled-components";

export const DetailsDashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 12rem;

  @media(max-width: 800px) {
    flex-direction: column;
    display: none;
  }

`;

export const CardDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 25%;
  background-color: #0b3b69;
  border-radius: 0.5rem;
  flex-direction: column;

  gap: 10px;

  @media(max-width: 800px) {
    display: none;
  }

`;

export const CardTitle = styled.h1`
  color: blue;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: white;
`;
export const CardValue = styled.span`
  color: white;
  font-size: 1.8rem;
`;

export const Title = styled.span `
  color: black;
  padding-bottom: 15px;

  @media(max-width: 800px) {
    font-size: 0.8rem;
  }
`
