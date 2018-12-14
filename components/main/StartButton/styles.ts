import styled from '../../../styled-components';
import { Flex } from '@rebass/grid';
import PatternBacgkround from '../../common/PatternBacgkround';

export const Wrapper = styled.div`
  max-width: 37.875rem;
  width: 44%;
  position: fixed;
  bottom: 4.375rem;
  left: 5.25rem;
  z-index: 1;
  &:hover > div:last-child {
    background-color: transparent;
    background-image: url(${PatternBacgkround});
  }
`;

export const StartButton = styled(Flex)`
  background: ${props => props.theme.primaryColor};
  box-shadow: inset 0 0 0 0.25rem ${props => props.theme.blackColor};
  padding: 3.375rem 2.5rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  z-index: 1;
  cursor: pointer;
`;

export const BorderShadow = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0.75rem;
  top: 0.75rem;
  z-index: -1;
  background: transparent;
  box-shadow: inset 0 0 0 0.25rem ${props => props.theme.blackColor};
`;

export const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  ${(props: { fontLoaded: boolean }) =>
    props.fontLoaded &&
    `
    font-family: 'HS Spring Wind', sans-serif;
  `}
  font-size: 4rem;
  font-weight: 700;
`;

export const Description = styled.h3`
  color: ${props => props.theme.whiteColor};
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: 400;
`;
