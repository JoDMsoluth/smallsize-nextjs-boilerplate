import { createGlobalStyle } from 'styled-components';
import { theme, css } from '../../../../utils';
import normalize from './normalize';

/*
body {
  ${css.media.mobile`
      position: fixed;
  `};
}
*/

const GlobalStyle = createGlobalStyle`
  ${normalize};
  html {
    background-color: ${theme('htmlBg')};
  }
  body {
    ${css.media.mobile`
      position: relative;
   `};
    background-color: ${theme('htmlBg')};
  }
  *::-moz-selection {
    background-color: ${theme('selectionBg')} !important;
  }
  *::selection {
    background-color: ${theme('selectionBg')} !important;
  }
  a:hover {
    color: ${theme('a.hover')};
  }
  a:active {
    color: ${theme('a.active')};
  }

  ::-webkit-scrollbar {
    background: transparent;
    width: 4px;
  }
  ::-webkit-scrollbar-button {
    background: transparent;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-track-piece {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme('banner.title')};
  }
  ::-webkit-scrollbar-corner {
    background: grey;
  }
  ::-webkit-resizer {
    background: grey;
  }
`;

export default GlobalStyle;
