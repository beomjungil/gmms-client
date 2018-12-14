import { createGlobalStyle } from '../../../styled-components';
import normalize from './normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  button {
    cursor: pointer;
  }
  a {
    cursor: pointer;
  }
  html {
    font-size: 16px;
    font-family: ${props => props.theme.defaultSansSerifColor};

    &.noto-sans-kr-loaded {
      font-family: 'Noto sans KR', ${props =>
        props.theme.defaultSansSerifColor};
    }
  }
  p, h1, h2, h3, h4 {
    margin: 0;
  }
`;

export default GlobalStyles;
