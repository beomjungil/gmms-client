import styled from '../../styled-components';
import { Box } from '@rebass/grid';
import PatternBacgkround from '../common/PatternBacgkround';

export const Container = styled(Box)`
  max-width: 60.25rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  flex-grow: 0;
  flex-shrink: 0;

  @media (max-width: 980px) {
    max-width: 40rem;
  }
`;

export const Label = styled.p`
  margin-top: 4.5rem;
  font-size: 1.125rem;
  color: ${props => props.theme.blackColor};
  opacity: 0.8;
`;

export const FocusBar = styled.div`
  background-color: ${props => props.theme.accentColor};
  height: 0.5rem;
  top: 11.875rem;
  left: 0;
  width: ${(props: { width: number }) => props.width}px;
  position: fixed;
`;

export const Gap = styled.div`
  flex: 1 1 auto;
  position: relative;
`;

export const ItemTitle = styled.h2`
  span {
    color: ${props => props.theme.primaryColor};
    display: block;
  }
  font-size: 2rem;
  line-height: 3.375rem;
  font-weight: 700;
  white-space: pre-wrap;
`;

export const ItemDesc = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  opacity: 0.6;
  white-space: pre-wrap;
`;

export const GotoStart = styled.a`
  font-size: 2rem;
  font-weight: 700;
  &:active,
  &:focus {
    outline: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: inline-block;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem 5rem;
  box-shadow: inset 0 0 0 0.25rem ${props => props.theme.blackColor};
  color: ${props => props.theme.whiteColor};
  margin: 11.875rem 0 7.5rem;
  position: relative;
  &:hover > div:last-child {
    background-color: transparent;
    background-image: url(${PatternBacgkround});
  }
`;

export const ButtonShadow = styled.div`
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
