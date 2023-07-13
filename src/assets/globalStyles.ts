import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
 ${normalize}

 button {
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
 }
 
 a {
  text-decoration: none;
  color: black;
 }
`;

export default GlobalStyle;
