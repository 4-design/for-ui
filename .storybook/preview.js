import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles'

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

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <div className="h-screen">
        <CssBaseline />
        <Story />
      </div>
    </StyledEngineProvider>
  ),
]
