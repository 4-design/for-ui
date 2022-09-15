import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Divider } from './Divider'

export default {
  title: 'Example / Divider',
  component: Divider,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div className="mt-10 flex h-screen w-screen flex-col gap-4">
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
