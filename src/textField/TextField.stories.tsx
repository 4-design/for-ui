import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Meta } from '@storybook/react/types-6-0'
import { useForm } from 'react-hook-form'
import tw from 'twin.macro'
import * as yup from 'yup'

import { Button } from '../button/Button'
import { TextField } from './TextField'

export default {
  title: 'Atom/TextField',
  component: TextField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(Story: any) => <Story />],
} as Meta

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
})

export const Standard = (): JSX.Element => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div tw="flex flex-col gap-4">
        <h1 tw="mt-4">Text Field (default styles)</h1>
        <div tw="flex flex-col mt-2">
          <TextField
            required
            fullWidth
            variant="standard"
            inputRef={register}
            autoComplete="on"
            type="email"
            name="email"
            label="メールアドレス"
            inputTwin={tw`(max-w-sm text-4xl tracking-wide p-0)!`}
            placeholder="example@lancepod.com"
            error={errors['email']}
          />
        </div>
        <div tw="flex flex-col mt-2">
          <TextField
            variant="standard"
            name="password"
            type="password"
            label="パスワード"
            placeholder="example@lancepod.com"
            error={errors['password']}
          />
        </div>
        <div tw="flex flex-col mt-2">
          <TextField
            multiline
            rows={4}
            variant="standard"
            name="password"
            type="password"
            label="パスワード"
            placeholder="example@lancepod.com"
            error={errors['password']}
          />
        </div>
        <div tw="flex flex-col gap-5 mt-2">
          <h2>Disabled Textfield</h2>
          <p>
            Note: Tailwind does not support readonly by default, so currently
            only disabled attr style is provided
          </p>
          <TextField
            variant="standard"
            name="password"
            type="password"
            label="パスワード"
            error={errors['password']}
          />
        </div>
      </div>
    </form>
  )
}

export const Outlined = (): JSX.Element => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <form tw="w-96" onSubmit={handleSubmit(onSubmit)}>
      <h1 tw="mb-4">Text Field (default styles)</h1>
      <div tw="mb-4">
        <TextField
          required
          fullWidth
          variant="outlined"
          inputRef={register}
          autoComplete="on"
          type="email"
          name="email"
          label="メールアドレス"
          inputTwin={tw`(max-w-sm text-4xl tracking-wide p-0 h-20)!`}
          placeholder="example@lancepod.com"
          error={errors['email']}
        />
      </div>
      <div tw="mb-4">
        <TextField
          required
          fullWidth
          multiline
          rows={3}
          variant="outlined"
          inputRef={register}
          autoComplete="on"
          type="email"
          name="email"
          label="メールアドレス"
          placeholder="example@lancepod.com"
          error={errors['email']}
        />
      </div>
      <div tw="mb-4">
        <TextField
          name="password"
          inputRef={register}
          type="password"
          label="パスワード"
          placeholder="example@lancepod.com"
          error={errors['password']}
        />
      </div>

      <div tw="mt-8">
        <Button type="submit">登録する</Button>
      </div>
    </form>
  )
}
