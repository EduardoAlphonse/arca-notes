import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        normal: string;
        medium: string;
        dark: string;
      };

      text: {
        normal: string;
        light: string;
        lighter: string;
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

    typography: {
      title: string;
      subtitle: string;
      button: string;
      text: string;
      textMedium: string;
      textSmall: string;
      textSmallMedium: string;
      textSmallSemiBold: string;
      textSmallest: string;
      textSmallestSemiBold: string;
    };

    shapes: {
      borderRadius: string;
    };
  }
}
