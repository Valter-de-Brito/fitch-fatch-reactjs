import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0;
}

body{
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;

  background-color: #E7F1F0;
  font-family: 'Roboto', sans-serif;
}
`;

export default GlobalStyle;
