import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import 'twin.macro'
import { Divider } from './Divider'

export default {
  title: 'Example / Divider',
  component: Divider,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div tw="mt-10 flex flex-col h-screen w-screen gap-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const Base = () => (
  <div>
    <Divider />
  </div>
)
