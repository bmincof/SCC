import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    width: 360px;
    position: absolute;
    left: calc(50% - 180px);
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
