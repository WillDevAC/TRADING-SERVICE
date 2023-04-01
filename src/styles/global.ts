import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Archivo+Black&family=Poppins:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: 'Poppins', sans-serif;

        /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: white; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #072038; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: black; 
    }
  }
`;
