import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Meta } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '../button/Button';
import { TextField } from './TextField';

export default {
  title: 'Form / TextField',
  component: TextField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

type FieldValue = {
  email: string;
  password: string;
  price: string;
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const Outlined = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValue>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: unknown) => console.info(data);

  return (
    <div className="grid grid-cols-2 gap-2">
      <form className="w-96" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-4">Text Field (default styles)</h1>
        <div className="mb-4">
          <TextField
            required
            fullWidth
            variant="outlined"
            autoComplete="on"
            type="email"
            label="メールアドレス"
            placeholder="example@lancepod.com"
            {...register('email')}
          />
        </div>
        <div className="mb-4">
          <TextField
            error
            required
            fullWidth
            variant="outlined"
            autoComplete="on"
            type="email"
            label="メールアドレス Error"
            placeholder="example@lancepod.com"
            helperText="ヘルパーテキスト"
            {...register('email')}
          />
        </div>

        <div className="mb-4">
          <TextField
            type="password"
            label="パスワード"
            placeholder="example@lancepod.com"
            error={errors && !!errors['password']}
            {...register('password')}
          />
        </div>

        <div className="mb-4">
          <TextField
            label="金額"
            placeholder="3"
            unitLabel="万円"
            isPriceFormat
            error={errors && !!errors['price']}
            {...register('price')}
          />
        </div>
        <div className="mb-4">
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
        <div className="mb-4">
          <TextField
            required
            multiline
            variant="outlined"
            autoComplete="on"
            type="email"
            label="マルチライン"
            placeholder="example@lancepod.com"
            error={errors && !!errors['email']}
            {...register('email')}
          />
        </div>
        <div className="mb-4">
          <TextField
            error
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            autoComplete="on"
            type="email"
            label="エラー"
            placeholder="example@lancepod.com"
            {...register('email')}
          />
        </div>

        <div className="mt-8">
          <Button type="submit">登録する</Button>
        </div>
      </form>
      <form className="w-96" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-4">Text Field (default styles)</h1>
        <div className="mb-4">
          <TextField
            fontSize="medium"
            required
            fullWidth
            variant="outlined"
            autoComplete="on"
            type="email"
            label="メールアドレス"
            placeholder="example@lancepod.com"
            {...register('email')}
          />
        </div>
        <div className="mb-4">
          <TextField
            fontSize="medium"
            error
            required
            fullWidth
            variant="outlined"
            autoComplete="on"
            type="email"
            label="メールアドレス Error"
            placeholder="example@lancepod.com"
            helperText="ヘルパーテキスト"
            {...register('email')}
          />
        </div>

        <div className="mb-4">
          <TextField
            fontSize="medium"
            type="password"
            label="パスワード"
            placeholder="example@lancepod.com"
            error={errors && !!errors['password']}
            {...register('password')}
          />
        </div>

        <div className="mb-4">
          <TextField
            fontSize="medium"
            label="金額"
            placeholder="3"
            unitLabel="万円"
            isPriceFormat
            error={errors && !!errors['price']}
            {...register('price')}
          />
        </div>
        <div className="mb-4">
          <TextField
            fontSize="medium"
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
        <div className="mb-4">
          <TextField
            fontSize="medium"
            required
            multiline
            variant="outlined"
            autoComplete="on"
            type="email"
            label="マルチライン"
            placeholder="example@lancepod.com"
            error={errors && !!errors['email']}
            {...register('email')}
          />
        </div>
        <div className="mb-4">
          <TextField
            fontSize="medium"
            error
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            autoComplete="on"
            type="email"
            label="エラー"
            placeholder="example@lancepod.com"
            {...register('email')}
          />
        </div>

        <div className="mt-8">
          <Button type="submit">登録する</Button>
        </div>
      </form>
    </div>
  );
};
