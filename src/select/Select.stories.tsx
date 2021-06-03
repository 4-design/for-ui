import React from 'react'
import tw from 'twin.macro'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Controller, useForm } from 'react-hook-form'
import { Select, SelectOption } from './Select'
import { Button } from '../button'

export default {
  title: 'Atom/Select',
  component: Select,
  decorators: [
    (Story: any) => (
      <div tw="mt-10 flex flex-col h-screen w-screen gap-4">
        <Story />
      </div>
    ),
  ],
} as Meta

const options = [
  {
    label: '日本',
    value: 'japan',
  },
  {
    label: 'アメリカ',
    value: 'america',
  },
]

const Template: Story = () => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      country: options[0],
    },
  })
  const onSubmit = (data: any) => console.log(JSON.stringify(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="country"
        control={control}
        render={({ onChange, ...fields }) => {
          return (
            <Select
              {...fields}
              name={fields.name}
              options={options}
              twin={[tw`w-44`]}
              onChange={(e, option) => {
                onChange(option)
              }}
            />
          )
        }}
      />

      <Button type="submit">登録</Button>
    </form>
  )
}

export const Default = Template.bind({})
Default.args = {}
