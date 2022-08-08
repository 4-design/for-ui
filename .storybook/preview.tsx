import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles'
import { createRoot } from 'react-dom/client'

import React from 'react'
import { CssBaseline, GlobalStyles } from '@mui/material'

import '../src/styles/global.css'
import '../src/styles/tailwind.v2.css'

export const parameters = {
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#FFF',
      },
    ],
  },
  controls: { expanded: true },
  options: {
    storySort: {
      order: ['General', 'Form', 'Data Display', 'Feedback', 'Navigation'],
    },
  },
}

const rootElement = document.getElementById('root')

const theme = createTheme({
  components: {
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

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="h-screen">
          {/* <CssBaseline /> */}
          <Story />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  ),
]
