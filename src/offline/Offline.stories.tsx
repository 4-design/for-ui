import React from 'react'
import tw from 'twin.macro'
import { Meta } from '@storybook/react/types-6-0'

import { Offline } from './Offline'
import { Typography } from '../typography'

export default {
  title: 'Atom/Offline',
  component: Offline,
  decorators: [
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
      <Typography variant="h4">
        {"Devtools > Network から'Offline'を選択してください"}
      </Typography>

      <Offline>インターネットに接続されていません。</Offline>
    </div>
  </>
)
