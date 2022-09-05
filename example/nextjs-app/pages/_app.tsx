import * as React from 'react'
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material'

import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  let theme = createTheme()

  if (typeof window !== 'undefined') {
    const rootElement = window.document.getElementById('__next')
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
    })
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default MyApp
