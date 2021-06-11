import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Controller, useForm } from 'react-hook-form'
import tw from 'twin.macro'
import { Button } from '../button'
import { Select } from './Select'

export default {
  title: 'Atom/Select',
  component: Select,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div tw="mt-10 flex flex-col h-screen w-screen gap-4">
        <Story />
      </div>
    ),
  ],
} as Meta

export const Basic: Story = () => {
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
  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: options[0],
    },
  })
  const onSubmit = (data: unknown) => console.log(JSON.stringify(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="country"
        control={control}
        render={({ onChange, ...fields }) => {
          return (
            <Select
              {...fields}
              fullWidth
              name={fields.name}
              options={options}
              twin={[tw`w-44`]}
              onChange={(e, option) => {
                console.log('option', option)
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

export const Multiple: Story = () => {
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

  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: options,
    },
  })
  const onSubmit = (data: unknown) => console.log(JSON.stringify(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="country"
        control={control}
        render={({ onChange, ...fields }) => {
          return (
            <Select
              {...fields}
              multiple
              name={fields.name}
              options={options}
              twin={[tw`w-160`]}
              onChange={(e, option) => {
                console.log('option', option)
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

export const MultipleFreeSolo: Story = () => {
  const options = ['japan', 'america']

  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: options,
    },
  })
  const onSubmit = (data: unknown) => console.log(JSON.stringify(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="country"
        control={control}
        render={({ onChange, ...fields }) => {
          return (
            <Select
              {...fields}
              freeSolo
              multiple
              name={fields.name}
              options={options}
              twin={[tw`w-160`]}
              onChange={(e, option) => {
                console.log('option', option)
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
