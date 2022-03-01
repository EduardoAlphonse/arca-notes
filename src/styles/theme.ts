import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: {
      normal: '#2D8A68',
      medium: '#267D5C',
      dark: '#1E714F',
    },
    text: {
      normal: '#3F3F3F',
      light: '#767676',
    },
    background: {
      light: '#F7F7F7',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
      divider: '#D2D2D2',
    },
  },
  typography: {
    title: '600 1.5rem Poppins',
    subtitle: '600 1rem Poppins',
    button: '600 1rem Poppins',
    text: '400 0.875rem Poppins',
    textMedium: '500 0.875rem Poppins',
    textSmall: '400 0.75rem Poppins',
    textSmallMedium: '500 0.75rem Poppins',
    textSmallSemiBold: '600 0.75rem Poppins',
    textSmallest: '400 0.625rem Poppins',
    textSmallestSemiBold: '600 0.625rem Poppins',
  },

  shapes: {
    borderRadius: '6px',
  },
};

export { theme };
