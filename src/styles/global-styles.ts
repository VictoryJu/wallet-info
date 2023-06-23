import { createGlobalStyle } from 'styled-components';
import './font.css';
const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "PretendarVar" ;
    letter-spacing: -0.3px;
  }
  button{
    border:none;
    cursor: pointer;
  }
  html,
  body {
    background-color: #F6F7FA;
    height: 100%;
  }
`;
export default GlobalStyles;
