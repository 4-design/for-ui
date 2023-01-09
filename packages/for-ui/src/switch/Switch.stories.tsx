import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Controller, useForm } from 'react-hook-form';
import { Button } from '../button';
import { Switch } from './Switch';
import { SwitchGroup } from './SwitchGroup';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default {
  title: 'Form / Switch',
  component: Switch,
  argTypes: {},
} as Meta;

export const Basic = (): JSX.Element => {
  const { control, handleSubmit } = useForm<{
    default1: boolean;
    default2: boolean;
    disable1: boolean;
    disable2: boolean;
  }>({
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: unknown) => console.info(data);

  return (
    <div className="flex flex-row gap-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SwitchGroup required label="サービス名">
          <Controller
            control={control}
            name="default1"
            defaultValue={false}
            render={({ field: { name, value, onChange } }) => {
              return <Switch name={name} label="default1" checked={value} onChange={onChange} />;
            }}
          />
          <Controller
            control={control}
            name="default2"
            defaultValue={true}
            render={({ field: { name, value, onChange } }) => {
              return <Switch name={name} label="default2" checked={value} onChange={onChange} />;
            }}
          />
          <Controller
            control={control}
            name="disable1"
            defaultValue={false}
            render={({ field: { name, value, onChange } }) => {
              return <Switch name={name} label="disable1" checked={value} disabled onChange={onChange} />;
            }}
          />
          <Controller
            control={control}
            name="disable2"
            defaultValue={true}
            render={({ field: { name, value, onChange } }) => {
              return <Switch name={name} label="disable2" checked={value} disabled onChange={onChange} />;
            }}
          />
        </SwitchGroup>

        <div className="mt-8">
          <Button type="submit">登録する</Button>
        </div>
      </form>
    </div>
  );
};

const schema = yup.object({
  autosave: yup.string().required(),
});

type FieldValue = yup.InferType<typeof schema>;

export const WithReactHookForm = () => {
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
