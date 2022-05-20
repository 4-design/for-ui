import React from 'react'
import { Meta, Args } from '@storybook/react/types-6-0'

import tw from 'twin.macro'
import { Text } from '../typography/Typography'
import { Chip } from './Chip'

export default {
  title: 'Atom/Chip',
  component: Chip,
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
    label: { control: 'text', defaultValue: 'ラベル' },
    color: { control: 'select', options: ['default', 'negative'] },
    onDelete: { action: 'onDelete' },
  },
} as Meta

export const Base = (args: Args) => (
  <div tw="flex flex-col">
    <div tw="border-b mb-4">
      <Text variant="h3">Chip</Text>
    </div>

    <div tw="flex flex-col gap-4">
      <div>
        <Chip label={args.label} color={args.color} twin={[tw`font-bold`]} />
      </div>
      <div>
        <Chip label={args.label} color={args.color} onDelete={args.onDelete} />
      </div>
    </div>
  </div>
)
