import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from '../button/Button';
import { LegacyText as Text } from '../typography';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';

export default {
  title: 'Navigation / Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div className="flex h-full w-full flex-col gap-4">
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

export const Uncontrolled = () => (
  <MenuList>
    <MenuItem>プロフィール</MenuItem>
    <MenuItem>設定</MenuItem>
    <MenuItem>コンタクト</MenuItem>
  </MenuList>
);
