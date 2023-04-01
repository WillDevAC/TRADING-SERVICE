import styled from "styled-components";

export const ContainerOptions = styled.div`
  display: flex;
  padding-top: 2.5rem;
  height: auto;
  flex-direction: column;
  gap: 1rem;
  margin-left: 0.5%;

  @media (max-width: 800px) {
    margin-left: 2%;
  }
`;

export const LinkBox = styled.a`
  text-decoration: none;
`;
