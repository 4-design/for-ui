import React from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import '../styles/index.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  let theme = createTheme();

  if (typeof window !== 'undefined') {
    const rootElement = window.document.getElementById('__next');
    theme = createTheme({
      components: {
        MuiModal: {
          defaultProps: {
            container: rootElement,
          },
        },
        MuiPopover: {
          defaultProps: {
            container: rootElement,
          },
        },
        MuiPopper: {
          defaultProps: {
            container: rootElement,
          },
        },
      },
    });
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MyApp;
