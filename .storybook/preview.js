import React from 'react'
import 'twin.macro'
import { GlobalStyles } from 'twin.macro'

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
      order: ['General', 'Form', 'Data Display', 'Feedback', 'Navigation']
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
      </head>
      <GlobalStyles />
      <div tw="h-screen">
        <Story />
      </div>
    </>
  ),
]
