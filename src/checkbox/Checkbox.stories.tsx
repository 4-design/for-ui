import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { useForm } from 'react-hook-form'

import { Button } from '../button'
import { Checkbox } from './Checkbox'

export default {
  title: 'Form / Checkbox',
  component: Checkbox,
  decorators: [(Story) => <Story />],
} as Meta

export const Basic = (): JSX.Element => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: unknown) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-2">
        <Checkbox
          value="required"
          label="チェックボックス A"
          {...register('sample-a')}
        />
        <Checkbox
          value="required"
          label="チェックボックス B"
          {...register('sample-b')}
        />
      </div>

      <div className="flex flex-col mb-4">
        <Checkbox
          disabled
          value="required"
          label="チェックボックス A"
          {...register('sample-a')}
        />
        <Checkbox
          disabled
          value="required"
          label="チェックボックス B"
          {...register('sample-b')}
        />
      </div>

      <Button type="submit">登録</Button>
    </form>
  )
}

export const WithNopadding = (): JSX.Element => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: unknown) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <Checkbox
          nopadding
          value="required"
          label="チェックボックス A"
          {...register('sample-a')}
        />

        <Checkbox
          nopadding
          value="required"
          label="チェックボックス A"
          {...register('sample-a')}
        />
      </div>

      <Button type="submit">登録</Button>
    </form>
  )
}
