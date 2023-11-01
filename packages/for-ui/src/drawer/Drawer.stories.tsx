import React from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import { Button } from '../button';
import { Text } from '../text';
import { Drawer, drawerAnchorPositions } from './Drawer';
import { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Drawer>

export default {
  title: 'Feedback / Drawer',
  component: Drawer,
  argTypes: {
    open: { control: 'boolean' },
    onClose: { action: 'onClose' },
  },
  args: {
    TriggerComponent: <Button>開く</Button>
  },
  decorators: [
    (Story) => (
      <Story />
    ),
  ],
} satisfies Meta<typeof Drawer>;

export const Playground: Story = {
  args: {
    children: (
      <section className="flex flex-col p-4">
        <Text as="h3" size="xr" weight="bold">
          タイトル
        </Text>
        <Text>
          コンテンツ
        </Text>
      </section>
    )
  }
}

export const WithNavigation: Story = {
  args: {
    navigation: (
      <Text className="bg-primary-dark-default flex w-full">ナビゲーションエリア</Text>
    )
  }
}

// export const Base = Template.bind({});
// Base.args = {
//   open: true,
//   backgroundcolor: '#fff',
// };

// export const WithNavigation = Template.bind({});
// WithNavigation.args = {
//   open: true,
//   navigation: (
//     <Button size="medium">
//       <MdOutlineEdit />
//       編集
//     </Button>
//   ),
// };

// export const AnchorLeading = Template.bind({});
// AnchorLeading.args = {
//   open: true,
//   anchor: drawerAnchorPositions.leading,
// };

// export const AnchorTrailing = Template.bind({});
// AnchorTrailing.args = {
//   open: true,
//   anchor: drawerAnchorPositions.trailing,
// };

// export const FixedWidthLeading = Template.bind({});
// FixedWidthLeading.args = {
//   open: true,
//   width: 640,
//   anchor: drawerAnchorPositions.leading,
// };

// export const FixedWidthTrailing = Template.bind({});
// FixedWidthTrailing.args = {
//   open: true,
//   width: 640,
//   anchor: drawerAnchorPositions.trailing,
// };

// export const WithTriggerComponent = Template.bind({});
// WithTriggerComponent.args = {
//   TriggerComponent: <Button>開く</Button>,
//   onClose: undefined,
// };

// export const WithoutBackdrop = Template.bind({});
// WithoutBackdrop.args = {
//   TriggerComponent: <Button>開く</Button>,
//   onClose: undefined,
//   hideBackdrop: true,
// };
