import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Meta } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '../button/Button';
import { TextArea } from './TextArea';
import { Text } from '../text';

export default {
  title: 'Form / TextArea',
  component: TextArea,
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

export const Default = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValue>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: unknown) => console.info(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Text as="h3" size="l" weight="bold">
        TextArea
      </Text>

      <TextArea
        rows={3}
        label="3行固定TextArea"
        autoComplete="on"
        placeholder="4design@example.com"
        error={!!errors['email']}
        {...register('email')}
      />

      <TextArea
        label={
          <Text>
            改行すると行が増えるTextArea
            <Text
              weight="regular"
              size="xs"
              className="border-negative-medium-default text-negative-medium-default ml-1 rounded-full border px-1"
            >
              必須
            </Text>
          </Text>
        }
        required
        autoComplete="on"
        placeholder="4design@example.com"
        error={!!errors['email']}
        {...register('email')}
      />

      <TextArea
        label="最小2行 最大4行 TextArea"
        required
        minRows={2}
        maxRows={4}
        autoComplete="on"
        placeholder="4design@example.com"
        error={!!errors['email']}
        helperText="注: たくさん入力しても4行以上にはなりません"
        {...register('email')}
      />

      <TextArea
        label={
          <Text size="l" weight="regular" className="text-shade-light-default">
            エラー
            <Text className="text-negative-medium-default" weight="regular">
              *
            </Text>
          </Text>
        }
        error
        autoComplete="on"
        placeholder="4design@example.com"
        {...register('email')}
      />

      <TextArea
        error
        autoComplete="on"
        placeholder="4design@example.com"
        {...register('email')}
        label="エラー"
        helperText="エラーがでてます"
      />

      <TextArea
        label="disabled"
        rows={3}
        autoComplete="on"
        placeholder="4design@example.com"
        error={!!errors['email']}
        disabled
        {...register('email')}
      />
      <Button type="submit">登録する</Button>
    </form>
  );
};

export const Playground = {
  args: {
    rows: undefined,
    minRows: undefined,
    maxRows: undefined,
    disabled: undefined,
    placeholder: '',
    error: undefined,
    defaultValue: undefined,
    value: undefined,
    className: undefined,
  },
};
