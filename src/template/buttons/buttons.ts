import styled from "styled-components";

export const Button = styled.button`
  padding: 1.2rem;
  border: none;
  border-radius: 30px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
`;

export const ButtonDefault = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: #0d3357;
  }
`;

export const ButtonLink = styled(Button)`
  background-color: transparent;
  color: gray;
`;
