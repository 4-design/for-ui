import React from 'react'
import 'twin.macro'
import { Meta } from '@storybook/react/types-6-0'
import { useForm } from 'react-hook-form'

import { Button } from '../button'
import { Checkbox } from './Checkbox'

export default {
  title: 'Atom/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div tw="mt-10 flex flex-col h-screen w-screen gap-4">
        <Story />
      </div>
    ),
  ],
} as Meta

export const Basic = (): JSX.Element => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: unknown) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div tw="flex flex-col mb-2">
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

      <div tw="flex flex-col mb-4">
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
