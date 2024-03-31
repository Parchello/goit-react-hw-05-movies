import { createGlobalStyle } from 'styled-components';
import bgi from './sj-objio-XFWiZTa2Ub0-unsplash.jpg';
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    
    background-color: lightgrey;
    background-image: url(${bgi});
    background-size: cover;
  }
`;

export default GlobalStyles;
