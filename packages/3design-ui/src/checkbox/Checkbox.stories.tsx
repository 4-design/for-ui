import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form';

import { Button } from '../button';
import { Checkbox } from './Checkbox';

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
      <div className="mb-2 flex flex-col">
        <Checkbox value="required" label="チェックボックス A" {...register('sample-a')} />
        <Checkbox value="required" label="チェックボックス B" {...register('sample-b')} />
      </div>

      <div className="mb-4 flex flex-col">
        <Checkbox disabled value="required" label="チェックボックス A" {...register('sample-a')} />
        <Checkbox disabled value="required" label="チェックボックス B" {...register('sample-b')} />
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
      <div className="flex flex-col gap-4">
        <Checkbox nopadding value="required" label="チェックボックス A" {...register('sample-a')} />

        <Checkbox nopadding value="required" label="チェックボックス A" {...register('sample-a')} />
      </div>

      <Button type="submit">登録</Button>
    </form>
  );
};
