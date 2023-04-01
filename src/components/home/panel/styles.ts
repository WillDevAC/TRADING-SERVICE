import styled from "styled-components";

export const SectionPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const Panel = styled.div`
  display: flex;
  background-color: white;
  width: 600px;
  height: auto;
  padding: 1.5rem 2rem 2rem 2rem;
  border-radius: 10px;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    height: auto;
    width: 95%;
    padding: 1.5rem 1rem 2rem 1rem;
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  align-items: center;

  img {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 30px;
    height: 2rem;
    cursor: pointer;

    &:hover {
      background-color: #242121;
    }
  }

  h4 {
    padding-left: 1rem;
    font-size: 1.4rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
