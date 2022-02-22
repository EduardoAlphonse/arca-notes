import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        normal: string;
      };

      text: {
        normal: string;
        light: string;
      };

      background: {
        light: string;
      };

      common: {
        black: string;
        white: string;
        divider: string;
      };
    };
  }
}
