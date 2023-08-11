import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 100%;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    background-color: #f1f5f9;
    color: #0f172a;
  }

  .container {
    width: 100%;
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
  }
`;
