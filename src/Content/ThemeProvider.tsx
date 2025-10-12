import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import Delight from '../assets/delight-font-family/delight-vf.ttf';

const appTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 17, 255, 1)",
      dark: "rgba(0, 10, 153, 1)",
    },
    background: {
      default: "rgba(3, 7, 21, 1)",
      paper: "rgba(255, 255, 255, 0.08)",
    },
    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(255, 255, 255, 0.8)",
      disabled: "rgba(255, 255, 255, 0.3)",
    },
    divider: "rgba(255, 255, 255, 0.1)",
    grey: {
      "100": "rgba(255, 255, 255, 1)",
    },
  },
  typography: {
    fontFamily: "'Delight','Inter Tight',sans-serif",
    h1: {
      fontFamily: '"Delight", sans-serif',
      fontSize: '94px',
      fontWeight: 350,
      color: '#fff',
      letterSpacing: "-1%",
      lineHeight: "80px",
      overflow: "visible",
    },
    h2: {
      fontFamily: '"Delight", sans-serif',
      fontSize: '68px',
      fontWeight: 380,
      lineHeight: '80px',
      letterSpacing: "0%",
    },
    h3: {
      fontFamily: '"Delight", sans-serif',
      fontSize: '100px',
      fontWeight: 280,
      lineHeight: '100%',
      letterSpacing: "0%",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "999px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Delight';
          font-style: normal;
          font-display: swap;
          font-weight: 350;
          src: local('Delight'), local('Delight-Regular'), url(${Delight}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Delight';
          font-style: normal;
          font-display: swap;
          font-weight: 380;
          src: local('Delight'), local('Delight-Regular'), url(${Delight}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Delight';
          font-style: normal;
          font-display: swap;
          font-weight: 550;
          src: local('Delight'), local('Delight-Regular'), url(${Delight}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Delight';
          font-style: normal;
          font-display: swap;
          font-weight: 280;
          src: local('Delight'), local('Delight-Regular'), url(${Delight}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
      
    },
  },
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
