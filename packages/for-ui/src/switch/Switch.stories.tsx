import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Controller, useForm } from 'react-hook-form';
import { Button } from '../button';
import { Switch } from './Switch';
import { SwitchGroup } from './SwitchGroup';

export default {
  title: 'Form / Switch',
  component: Switch,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div className="mt-10 flex h-screen w-screen flex-col gap-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Basic = (): JSX.Element => {
  const { control, handleSubmit } =
    useForm<{
      default1: boolean;
      default2: boolean;
      disable1: boolean;
      disable2: boolean;
    }>();

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
