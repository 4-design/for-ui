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
          name="sample-a"
          value="required"
          inputRef={register}
          label="チェックボックス A"
        />
        <Checkbox
          name="sample-b"
          value="required"
          inputRef={register}
          label="チェックボックス B"
        />
      </div>

      <div tw="flex flex-col mb-4">
        <Checkbox
          disabled
          name="sample-a"
          value="required"
          inputRef={register}
          label="チェックボックス A"
        />
        <Checkbox
          disabled
          name="sample-b"
          value="required"
          inputRef={register}
          label="チェックボックス B"
        />
      </div>

      <Button type="submit">登録</Button>
    </form>
  )
}
