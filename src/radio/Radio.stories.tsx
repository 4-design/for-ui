import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Radio } from './Radio'
import { RadioGroup } from './RadioGroup'

export default {
  title: 'Atom/Radio',
  component: Radio,
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

export const Basic = (): JSX.Element => {
  const handleRadioChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <div tw="flex flex-row gap-4">
        <RadioGroup label="サービス名" onChange={handleRadioChange}>
          <Radio label="Relance" value="relance" />
          <Radio label="Sreake Sonar" value="sreake-sonar" />
          <Radio label="Reckoner" value="reckoner" disabled />
        </RadioGroup>
      </div>
    </>
  )
}

export const error = () => (
  <>
    <div tw="flex flex-row gap-4">
      <RadioGroup label="サービス名" error="エラーを表示します">
        <Radio label="Relance" value="relance" />
        <Radio label="Sreake Sonar" value="sreake-sonar" />
        <Radio label="Reckoner" value="reckoner" />
      </RadioGroup>
    </div>
  </>
)
