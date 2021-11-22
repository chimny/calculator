// globalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Spartan, Open-Sans, Helvetica, Sans-Serif;
    font-weight: 700;
    
    & *{
      box-sizing: border-box;
    }
  }
`;
