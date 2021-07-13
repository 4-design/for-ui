import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Controller, useForm } from 'react-hook-form'
import { Button } from '../button/Button'
import { Switch } from './Switch'
import { SwitchGroup } from './SwitchGroup'

export default {
  title: 'Atom/Switch',
  component: Switch,
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

export const Basic = (): JSX.Element => {
  const { control, handleSubmit } =
    useForm<{ switch1: boolean; switch2: boolean }>()

  const onSubmit = (data: unknown) => console.log(data)

  return (
    <div tw="flex flex-row gap-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SwitchGroup required label="サービス名">
          <Controller
            control={control}
            name="switch1"
            defaultValue={false}
            render={({ field: { name, value, onChange } }) => {
              return (
                <Switch
                  name={name}
                  label="switch1"
                  checked={value}
                  onChange={onChange}
                />
              )
            }}
          />
          <Controller
            control={control}
            name="switch2"
            defaultValue={false}
            render={({ field: { name, value, onChange } }) => {
              return (
                <Switch
                  name={name}
                  label="switch2"
                  checked={value}
                  onChange={onChange}
                />
              )
            }}
          />
        </SwitchGroup>

        <div tw="mt-8">
          <Button type="submit">登録する</Button>
        </div>
      </form>
    </div>
  )
}
