import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import 'twin.macro'
import { Tag } from './Tag'

export default {
  title: 'Atom/Tag',
  component: Tag,
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

export const basic = () => (
  <>
    <div tw="flex flex-col">
      <Tag label="React" />
      <Tag label="onDelete" onDelete={() => console.log('onDelete')} />
    </div>
  </>
)
