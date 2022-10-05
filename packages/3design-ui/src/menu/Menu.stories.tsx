import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Button } from '../button/Button';
import { Text } from '../typography/Typography';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

export default {
  title: 'Navigation / Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div className="mt-10 flex h-screen w-screen flex-col gap-4">
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Base = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="mb-4 border-b">
        <Text variant="h3">Menu</Text>
      </div>

      <Menu TriggerComponent={<Button variant="contained">プロジェクト</Button>}>
        <MenuItem>
          <a href="#">プロフィール</a>
        </MenuItem>
        <MenuItem>
          <a href="#">設定</a>
        </MenuItem>
        <MenuItem>
          <a href="#">プロフィール</a>
        </MenuItem>
      </Menu>
    </div>
  );
};
