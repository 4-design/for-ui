import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../button';
import { Switch } from './Switch';

export default {
  title: 'Form / Switch',
  component: Switch,
  decorators: [
    (Story: Story) => (
      <div className="flex-col gap-4">
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Playground = {
  args: {
  },
};

const schema = yup.object({
  autosave: yup.string().required(),
});

type FieldValue = yup.InferType<typeof schema>;

export const Base = () => {
  const { register, handleSubmit } = useForm<FieldValue>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: unknown) => {
    console.info(data);
  };

  return (
    <form className="w-96" onSubmit={handleSubmit(onSubmit)}>
      <Switch label="自動保存" {...register('autosave')} />
      <Button type="submit">送信</Button>
    </form>
  );
};
