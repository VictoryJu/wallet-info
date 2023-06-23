import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary01: '#123ACC';
      primary02: '#0E42EE';
      primary03: '#919FC8';
      primary04: '#E7EBF8';
      primary05: '#5A31FF';
      primary06: '#4098FF';
      gray01: '#EDEFF5';
      gray02: '#7C89A8';
      gray06: '#6C7180';
      black02: '#22222';
      black03: '#333333';
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary01: '#123ACC',
    primary02: '#0E42EE',
    primary03: '#919FC8',
    primary04: '#E7EBF8',
    primary05: '#5A31FF',
    primary06: '#4098FF',
    gray01: '#EDEFF5',
    gray02: '#7C89A8',
    gray06: '#6C7180',
    black02: '#22222',
    black03: '#333333',
  },
};

export const sizes = {
  mobile: '999px',
  desktop: '1441px',
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
