import { createGlobalStyle } from 'styled-components';
import { colors } from './data/colors'; // Importa as cores

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${colors.background}; /* Usa a cor de fundo do tema */
    color: ${colors.lightText}; /* Usa a cor de texto claro do tema */
    line-height: 1.6;
  }

  h1, h2, h3 {
    font-weight: 900;
    text-transform: uppercase;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;