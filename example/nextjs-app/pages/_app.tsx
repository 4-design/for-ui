import React from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { StyledEngineProvider } from '@mui/material';
import '../styles/forty.css';
import '../styles/global.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
};

export default MyApp;
