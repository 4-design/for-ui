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
      <Text as="label" size="s" weight="bold" className="text-shade-medium-default flex flex-col gap-1">
        3行固定TextArea
        <TextArea
          rows={3}
          autoComplete="on"
          placeholder="4design@example.com"
          error={!!errors['email']}
          {...register('email')}
        />
      </Text>
      <Text as="label" size="s" weight="bold" className="text-shade-medium-default flex flex-col gap-1">
        改行すると行が増えるTextArea
        <TextArea
          required
          autoComplete="on"
          placeholder="4design@example.com"
          error={!!errors['email']}
          {...register('email')}
        />
      </Text>
      <Text as="label" size="s" weight="bold" className="text-shade-medium-default flex flex-col gap-1">
        最小2行 最大4行 TextArea
        <TextArea
          required
          minRows={2}
          maxRows={4}
          autoComplete="on"
          placeholder="4design@example.com"
          error={!!errors['email']}
          {...register('email')}
        />
      </Text>
      <Text as="label" size="s" weight="bold" className="text-shade-medium-default flex flex-col gap-1">
        <Text>
          エラー
          <Text className="text-negative-medium-default" weight="regular">
            *
          </Text>
        </Text>
        <TextArea error autoComplete="on" placeholder="4design@example.com" {...register('email')} />
      </Text>
      <Button type="submit">登録する</Button>
    </form>
  );
};
