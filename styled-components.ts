export interface ThemeInterface {
  primaryColor: string;
  accentColor: string;
  blackColor: string;
  whiteColor: string;
  defaultSansSerifColor: string;
}

import * as styledComponents from 'styled-components';
// tslint:disable-next-line:no-duplicate-imports
import { ThemedStyledComponentsModule } from 'styled-components';

export const theme: ThemeInterface = {
  primaryColor: '#4e3a9a',
  accentColor: '#ffc800',
  blackColor: '#000000',
  whiteColor: '#ffffff',
  defaultSansSerifColor:
    "-apple-system,system-ui,BlinkMacSystemFont,\"Apple SD Gothic Neo\", MalgunGothic,'맑은고딕',Dotum,'돋움',Helvetica,sans-serif"
};

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
