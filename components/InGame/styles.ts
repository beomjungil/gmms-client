import styled from '../../styled-components';
import { Flex } from '@rebass/grid';
import PatternBacgkround from '../common/PatternBacgkround';

export const Wrapper = styled(Flex)`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`;

export const SideBar = styled.div`
  max-width: 26.25rem;
  flex-grow: 0;
  flex-shrink: 1;
  width: 30%;
  background: #f5f5f5;
  height: 100%;
  padding: 2.25rem 2.625rem;
  box-sizing: border-box;
`;

export const SideBarLabel = styled.p`
  font-size: 1.125rem;
  opacity: 0.45;
`;

export const SideBarLevelHolder = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 0.5rem;
  margin-left: -0.375rem;
`;

export const SideBarLevel = styled.span`
  color: ${props => props.theme.primaryColor};
  font-size: 4rem;
  font-weight: 700;
  font-family: 'Muli';
  margin-bottom: 4.5rem;
`;

export const SideBarTotalLevel = styled.span`
  color: ${props => props.theme.blackColor};
  font-size: 1.5rem;
  font-family: 'Muli';
  position: relative;
  top: 0.625rem;
  left: 0.375rem;
  margin-bottom: 4.5rem;
`;

export const TypographWrapper = styled.div`
  flex: 1 1 auto;
  background: ${props => props.theme.whiteColor};
  display: flex;
  align-items: center;
  justify-content: center;
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
  position: relative;
  &:hover > div:last-child {
    background-color: transparent;
    background-image: url(${PatternBacgkround});
  }
`;
export const ButtonHolder = styled.div`
  right: 3.625rem;
  bottom: 2.875rem;
  position: fixed;
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

interface ParagraphProps {
  fontSize: number;
  lineHeight: number;
  paragraphWidth: number;
}

export const Paragraph = styled.p`
  font-family: 'KoPub Batang', serif;
  width: ${(props: ParagraphProps) => props.paragraphWidth}px;
  font-size: ${(props: ParagraphProps) => props.fontSize}px;
  line-height: ${(props: ParagraphProps) => props.lineHeight};
  transition: width 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),
    line-height 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955),
    font-size 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

export const Range = styled.input`
  margin: 1.5rem 0 3.625rem;
  & {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;

    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  /* Thumb Styling */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    box-shadow: inset 0 0 0 0.125rem
      ${props => (props.disabled ? '#e2e2e2' : props.theme.blackColor)};
    height: 1.125rem;
    width: 1.125rem;
    background: ${props =>
      props.disabled ? '#f2f2f2' : props.theme.primaryColor};
    cursor: pointer;
    transform: rotate(-45deg);
    margin-top: -.5rem; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    box-shadow: inset 0 0 0 0.125rem
      ${props => (props.disabled ? '#e2e2e2' : props.theme.blackColor)};
    height: 1.125rem;
    width: 1.125rem;
    background: ${props =>
      props.disabled ? '#f2f2f2' : props.theme.primaryColor};
    cursor: pointer;
    transform: rotate(-45deg);
  }

  &::-ms-thumb {
    -webkit-appearance: none;
    box-shadow: inset 0 0 0 0.125rem
      ${props => (props.disabled ? '#e2e2e2' : props.theme.blackColor)};
    height: 1.125rem;
    width: 1.125rem;
    background: ${props =>
      props.disabled ? '#f2f2f2' : props.theme.primaryColor};
    cursor: pointer;
    transform: rotate(-45deg);
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    border: solid 1px #ededed;
    background: ${props => props.theme.whiteColor};
  }

  &:active::-webkit-slider-runnable-track {
    background: #fafafa;
  }

  &::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  &::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &:focus::-ms-fill-lower {
    background: #3071a9;
  }
  &::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &:focus::-ms-fill-upper {
    background: #367ebd;
  }
`;

export const Label = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.blackColor};
  span {
    display: inline-block;
    min-width: 4.5rem;
    margin-right: 1rem;
    opacity: 0.45;
  }
`;
