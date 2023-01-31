import React, { useCallback } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { fsx } from '../system/fsx';
import { Switch } from './Switch';
import { SwitchGroup } from './SwitchGroup';
import { Button } from '../button';
import { Text } from '../text';

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
    backgroundColor: {
      control: 'color',
    },
  },
} as Meta;

export const Base = {
  args: {
    checked: true,
    disabled: false,
  },
};

const allPreferences = {
  spring: '春',
  summer: '夏',
  autumn: '秋',
  winter: '冬',
} as const;

const schema = yup.object({
  preferences: yup.object(Object.fromEntries(Object.keys(allPreferences).map((k) => [k, yup.boolean()]))),
});

type FieldValue = yup.InferType<typeof schema>;

export const WithSwitchGroup = () => {
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
    <form onSubmit={handleSubmit(onSubmit)} className={fsx(`flex flex-col gap-8`)}>
      <SwitchGroup
        required
        label="好きな季節"
        error={!!errors['preferences']}
        helperText={errors['preferences'] && '必須です'}
      >
        <Switch label="春" value={true} {...register('preferences.spring')} />
        <Switch label="夏" value={true} {...register('preferences.summer')} />
        <Switch label="秋" value={true} {...register('preferences.autumn')} />
        <Switch label="冬" value={true} {...register('preferences.winter')} />
        <Switch label="雨季" value={true} disabled />
      </SwitchGroup>
      <Button type="submit">保存</Button>
    </form>
  );
};

export const CustomLabel = () => (
  <Switch
    label={
      <Text size="xl" weight="bold" className="text-shade-medium-default">
        ラベル
      </Text>
    }
  />
);
