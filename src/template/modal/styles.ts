import styled from 'styled-components';

import Box from '@mui/material/Box';

export const ModalContainer = styled.div`
  display: flex;
  min-height: 50px;
  width: 100%;
  flex-direction: column;
  gap: 2rem;

  h3 {
      color: #0b3b69;
  }

  padding: 10%;
`;

export const BoxModal = styled(Box) `
    position: absolute;
    top: 45%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 40%;
    background-color: white;
    border: 2px solid #000;
    box-shadow: 24px;
    color: black;
    margin: 55px;

    @media(max-width: 800px) {
     z-index: 99999;
     width: 90%;
     left: 38%;
     top: 45%;
     margin: 12%;
    }
`