import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Switch } from './Switch';

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
