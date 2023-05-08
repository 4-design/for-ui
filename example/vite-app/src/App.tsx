import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { Router } from './router';

export const App = () => {
  const rootElement = window.document.getElementById('root');
  const theme = createTheme({
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

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
