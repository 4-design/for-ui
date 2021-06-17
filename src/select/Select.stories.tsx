import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Controller, useForm } from 'react-hook-form'
import tw from 'twin.macro'
import { Button } from '../button'
import { Select, SelectOption } from './Select'

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

const options: SelectOption[] = [
  {
    label: '日本',
    inputValue: 'japan',
  },
  {
    label: 'アメリカ',
    inputValue: 'america',
  },
]

export const Basic: Story = () => {
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
        render={({ field: { name, onChange, ...fields } }) => {
          console.log(fields)
          return (
            <Select
              name={name}
              placeholder="国名"
              options={options}
              twin={[tw`w-44`]}
              onChange={(e, option) => {
                onChange((option as SelectOption)?.inputValue)
              }}
            />
          )
        }}
      />

      <Button type="submit">登録</Button>
    </form>
  )
}

export const Single: Story = () => {
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
        render={({ field: { onChange, ...fields } }) => {
          return (
            <Select
              name={fields.name}
              placeholder="国名"
              options={options}
              twin={[tw`w-160`]}
              onChange={(e, option) => {
                onChange((option as SelectOption)?.inputValue)
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
        render={({ field: { onChange, ...fields } }) => {
          return (
            <Select
              multiple
              name={fields.name}
              label="国名"
              placeholder="未定"
              options={options}
              twin={[tw`w-160`]}
              onChange={(e, option) => {
                onChange((option as SelectOption)?.inputValue)
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
        render={({ field: { onChange, ...fields } }) => {
          return (
            <Select
              freeSolo
              multiple
              placeholder="国名"
              name={fields.name}
              options={options}
              twin={[tw`w-160`]}
              onChange={(e, option) => {
                onChange((option as SelectOption)?.inputValue)
              }}
            />
          )
        }}
      />

      <Button type="submit">登録</Button>
    </form>
  )
}
