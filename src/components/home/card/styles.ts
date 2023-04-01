import styled from "styled-components";

interface props {
  isColumn: string;
  isRentabilityTop: string;
  isRentabilityBottom: string;
}

export const Card = styled.div`
  color: white;
  background-color: white;
  display: flex;
  height: 200px;
  margin-left: 0.6rem;
  border-radius: 0.3rem;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(#0000, 0 0 #0000), var(#0000, 0 0 #0000), var(#0000);

  border-left: 6px solid #0b3b69;
`;

export const CardTitle = styled.span`
  color: grey;
  font-size: 85%;
  text-transform: uppercase;
`;

export const CardValueTop = styled.span<props>`
  color: black;
  text-transform: uppercase;
  font-size: 100%;
  padding-top: 1rem;
`;

export const CardValueBottom = styled.span<props>`
  color: black;
  text-transform: uppercase;
  font-size: 100%;
  padding-top: 1rem;
`;

export const CardSection = styled.div<props>`
  display: flex;
  color: black;
  width: 100%;
  height: 45%;
  margin: 1.2rem;
  flex-direction: ${(props) => (props.isColumn == "true" ? "row" : "column")};
`;
