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
} as Meta

type FieldValue = {
  email: string
  password: string
  price: string
}

const schema: yup.SchemaOf<FieldValue> = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
})

export const Standard = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValue>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: unknown) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div tw="flex flex-col gap-4">
        <h1 tw="mt-4">Text Field (default styles)</h1>
        <div tw="flex flex-col mt-2">
          <TextField
            required
            fullWidth
            error
            variant="standard"
            autoComplete="on"
            type="email"
            label="メールアドレス"
            inputTwin={tw`(max-w-sm tracking-wide p-0)!`}
            placeholder="example@lancepod.com"
            {...register('email')}
          />
        </div>
        <div tw="flex flex-col mt-2">
          <TextField
            variant="standard"
            type="password"
            label="パスワード"
            placeholder="example@lancepod.com"
            error={errors && !!errors['password']}
            {...register('password')}
          />
        </div>
        <div tw="flex flex-col mt-2">
          <TextField
            multiline
            rows={4}
            variant="standard"
            type="password"
            label="パスワード"
            placeholder="example@lancepod.com"
            error={errors && !!errors['password']}
            {...register('password')}
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
            type="password"
            label="パスワード"
            error={errors && !!errors['password']}
            {...register('password')}
          />
        </div>

        <div tw="mb-4">
          <TextField
            variant="standard"
            label="金額"
            placeholder="3"
            unitLabel="万円"
            isPriceFormat
            error={errors && !!errors['price']}
            {...register('price')}
          />
        </div>
      </div>
    </form>
  )
}

export const Outlined = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValue>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: unknown) => console.log(data)

  return (
    <form tw="w-96" onSubmit={handleSubmit(onSubmit)}>
      <h1 tw="mb-4">Text Field (default styles)</h1>
      <div tw="mb-4">
        <TextField
          required
          fullWidth
          variant="outlined"
          autoComplete="on"
          type="email"
          label="メールアドレス"
          inputTwin={tw`(max-w-sm tracking-wide p-0)!`}
          placeholder="example@lancepod.com"
          {...register('email')}
        />
      </div>
      <div tw="mb-4">
        <TextField
          error
          required
          fullWidth
          variant="outlined"
          autoComplete="on"
          type="email"
          label="メールアドレス Error"
          inputTwin={tw`(max-w-sm tracking-wide p-0)!`}
          placeholder="example@lancepod.com"
          helperText="ヘルパーテキスト"
          {...register('email')}
        />
      </div>
      <div tw="mb-4">
        <TextField
          disabled
          required
          fullWidth
          multiline
          rows={3}
          variant="outlined"
          autoComplete="on"
          type="email"
          label="メールアドレス"
          placeholder="example@lancepod.com"
          error={errors && !!errors['email']}
          {...register('email')}
        />
      </div>
      <div tw="mb-4">
        <TextField
          type="password"
          label="パスワード"
          placeholder="example@lancepod.com"
          error={errors && !!errors['password']}
          {...register('password')}
        />
      </div>

      <div tw="mb-4">
        <TextField
          label="金額"
          placeholder="3"
          unitLabel="万円"
          isPriceFormat
          error={errors && !!errors['price']}
          {...register('price')}
        />
      </div>

      <div tw="mt-8">
        <Button type="submit">登録する</Button>
      </div>
    </form>
  )
}
