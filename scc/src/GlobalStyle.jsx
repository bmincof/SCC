import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    
  }

  //initializer
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyle;
