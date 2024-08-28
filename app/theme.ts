'use client';
import { Roboto } from 'next/font/google';
import { createTheme, ThemeOptions , responsiveFontSizes} from '@mui/material/styles';


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};

const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};

export { lightTheme, darkTheme };













const theme = 
    createTheme({
      typography: {
        fontFamily: roboto.style.fontFamily,
      },
    })






export default responsiveFontSizes(theme);