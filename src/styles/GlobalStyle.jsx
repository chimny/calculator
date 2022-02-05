// globalStyles.js
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }


  body {
    margin: 0;
    padding: 0;
    font-family: Spartan, Open-Sans, Helvetica, Sans-Serif, sans-serif;
    font-weight: 700;


    & button {
      cursor: pointer;
      font-size: 32px;
      font-weight: 700;
      border-radius: 8px;
      border: none;
      height: 2.5rem;

      @media (max-width: 768px) {
        font-size: 24px;
      }
    }
  }
`;
