import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Loader } from './Loader'

export default {
  title: 'Example / Loader',
  component: Loader,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div className="mt-10 flex flex-col h-screen w-screen gap-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const Base = () => (
  <div className="flex flex-col">
    <Loader color="#00bfbf" loading={true} />
  </div>
)

export const WithText = () => (
  <div className="flex flex-col">
    <Loader color="#00bfbf" loading={true} text="リダイレクトします。。。。" />
  </div>
)
