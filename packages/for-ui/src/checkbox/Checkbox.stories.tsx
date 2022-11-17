import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form';

import { Button } from '../button';
import { Checkbox } from './Checkbox';
import { LegacyText as Text } from '../Typography';

export default {
  title: 'Form / Checkbox',
  component: Checkbox,
  decorators: [(Story) => <Story />],
} as Meta;

export const Basic = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: unknown) => console.error(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="border-shade-light-default rounded-md border p-6 pb-8">
          <Text variant="p" bold className="mb-1">
            ラベル
          </Text>

          <div className="grid grid-cols-3">
            <Checkbox label="テスト A" {...register('sample-a')} />
            <Checkbox label="テスト B" {...register('sample-a')} />
            <Checkbox label="テスト C" {...register('sample-a')} />
            <Checkbox label="テスト D" {...register('sample-a')} />
          </div>
        </div>
      </div>

      <Button type="submit">登録</Button>
    </form>
  );
};

export const WithNopadding = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: unknown) => console.error(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="border-shade-light-default rounded-md border p-6 pb-8">
          <Text variant="p" bold className="mb-1">
            ラベル
          </Text>

          <div className="grid grid-cols-3">
            <Checkbox nopadding label="テスト A" {...register('sample-a')} />
            <Checkbox nopadding label="テスト B" {...register('sample-a')} />
            <Checkbox nopadding label="テスト C" {...register('sample-a')} />
            <Checkbox nopadding label="テスト D" {...register('sample-a')} />
          </div>
        </div>
      </div>

      <Button type="submit">登録</Button>
    </form>
  );
};
