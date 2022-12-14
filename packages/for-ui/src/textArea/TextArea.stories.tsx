import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Meta } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '../button/Button';
import { TextArea } from './TextArea';

export default {
  title: 'Form / TextArea',
  component: TextArea,
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
    <form className="w-96" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-4">Text Field (default styles)</h1>
      <div className="mb-4">
        <TextArea
          required
          rows={3}
          autoComplete="on"
          label="メールアドレス"
          placeholder="example@lancepod.com"
          error={errors && !!errors['email']}
          {...register('email')}
        />
      </div>
      <div className="mb-4">
        <TextArea
          required
          autoComplete="on"
          label="マルチライン"
          placeholder="example@lancepod.com"
          error={errors && !!errors['email']}
          {...register('email')}
        />
      </div>
      <div className="mb-4">
        <TextArea
          error
          autoComplete="on"
          label="エラー"
          placeholder="example@lancepod.com"
          {...register('email')}
        />
      </div>

      <div className="mt-8">
        <Button type="submit">登録する</Button>
      </div>
    </form>
  );
};
