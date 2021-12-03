import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import 'twin.macro'
import { Text } from '../typography/Typography'
import { Radio } from './Radio'
import { RadioGroup } from './RadioGroup'

export default {
  title: 'Atom/Radio',
  component: Radio,
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

export const Base = (): JSX.Element => {
  const handleRadioChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div tw="flex flex-col gap-8">
      <div tw="border-b mb-4">
        <Text variant="h3">Radio</Text>
      </div>

      <div>
        <RadioGroup required label="サービス名" onChange={handleRadioChange}>
          <Radio label="Relance" value="relance" />
          <Radio label="Sreake Sonar" value="sreake-sonar" />
          <Radio label="Reckoner" value="reckoner" disabled />
        </RadioGroup>
      </div>

      <div>
        <RadioGroup
          required
          label="サービス名"
          onChange={handleRadioChange}
          error="必須項目です"
        >
          <Radio label="Relance" value="relance" />
          <Radio label="Sreake Sonar" value="sreake-sonar" />
          <Radio label="Reckoner" value="reckoner" disabled />
        </RadioGroup>
      </div>
    </div>
  )
}
