import styled, { keyframes } from '../../../styled-components';

const loop = keyframes`
  from {
      top: 0;
  }
  to {
      top: -100vh;
  }
`;

export const TextWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  z-index: -1;
  p {
    &::selection {
      background: transparent;
    }
    position: relative;
    animation: ${loop} 60s infinite;
    font-size: 1.25rem;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.04);
    font-family: 'KoPub Batang', ${props => props.theme.defaultSansSerifColor};
    span {
      color: rgba(0, 0, 0, 0.3);
      transition: color 0.5s ease-in-out;
      cursor: pointer;
      &:hover {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
