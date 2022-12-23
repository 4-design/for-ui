import React, { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Meta } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '../button/Button';
import { TextField } from './TextField';
import { Text } from '../text';

export default {
  title: 'Form / TextField',
  component: TextField,
} as Meta;

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
  price: yup.number().min(2).optional(),
  account: yup.string().optional(),
});

type FieldValue = yup.InferType<typeof schema>;

export const Playground = {
  prefix: '',
};

export const Outlined = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValue>({
    resolver: yupResolver(schema),
  });
  const onSubmit = useCallback((data: unknown) => {
    console.info(data);
  }, []);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Text as="h3" size="l" weight="bold">
        Text Field
      </Text>
      <div className="flex flex-col gap-1">
        <TextField
          required
          fullWidth
          error={!!errors['email']}
          autoComplete="on"
          type="email"
          label="メールアドレス"
          placeholder="example@example.com"
          {...register('email')}
        />
        {errors['email'] && (
          <Text size="s" className="text-negative-medium-default">
            メールアドレスは必須です
          </Text>
        )}
      </div>

      <div>
        <TextField
          required
          type="password"
          label="パスワード"
          placeholder="********"
          error={!!errors['password']}
          {...register('password')}
        />
        {errors['password'] && (
          <Text size="s" className="text-negative-medium-default">
            パスワードは必須です
          </Text>
        )}
      </div>

      <div>
        <TextField
          label="金額 (2万円以上)"
          placeholder="2"
          unitLabel="万円"
          isPriceFormat
          error={!!errors['price']}
          {...register('price')}
        />
        {errors['price'] && (
          <Text size="s" className="text-negative-medium-default">
            金額は2万円以上を入力してください
          </Text>
        )}
      </div>

      <div>
        <TextField
          label="アカウント名"
          prefix="https://example.com/accounts/"
          error={!!errors['account']}
          {...register('account')}
        />
        {errors['account'] && (
          <Text size="s" className="text-negative-medium-default">
            エラーです
          </Text>
        )}
      </div>

      <Button type="submit">登録する</Button>
    </form>
  );
};
