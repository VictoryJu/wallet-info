import { createGlobalStyle } from 'styled-components';
import './font.css';
import { devices } from './theme';
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
  #root,
  body {
    background-color: #F6F7FA;
    height: 100%;
  }
  .apexcharts-legend{
    display:flex !important;
    justify-content:flex-start !important;
    margin-top:40px !important;
    div{
      @media ${devices.desktop} {
        width:30% !important;
      }
      @media ${devices.mobile} {
        width:40% !important;
      }
    }
  }
  .apexcharts-legend-marker{
    @media ${devices.mobile} {
        margin-right:10px !important;
      }
  }
`;
export default GlobalStyles;
