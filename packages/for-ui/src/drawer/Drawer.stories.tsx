import React, { Fragment, useState } from 'react';
import { MdOutlineHistory, MdOutlineShare } from 'react-icons/md';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Drawer, drawerAnchorPositions } from '.';
import { Badge } from '../badge';
import { Button } from '../button';
import { Text } from '../text';
import { fsx } from '../system/fsx';

export default {
  title: 'Feedback / Drawer',
  component: Drawer,
  argTypes: {
    backgroundcolor: { control: 'color' },
    open: { control: 'boolean' },
    anchor: { options: ['left', 'right'], control: 'select' },
    onClose: { action: 'onClose' },
  },
  decorators: [
    (Story: Story) => (
      <div className="w-full">
        <div className="mb-4 border-b">
          <Text as="h3" size="l" weight="bold">
            Drawer
          </Text>
        </div>

        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => (
  <Drawer open={args.open} {...args}>
    <Text as="h4" size="xr" weight="bold">
      Title
    </Text>
    <Text>Children</Text>
    <Text>Children1/Children2</Text>
  </Drawer>
);

export const Base = Template.bind({});
Base.args = {
  open: true,
  backgroundcolor: '#fff',
};

export const WithHeaderChildren = Template.bind({});
WithHeaderChildren.args = {
  open: true,
  headerChildren: (
    <Text as="h2" size="l" weight="bold">
      Header
    </Text>
  ),
};

export const AnchorLeft = Template.bind({});
AnchorLeft.args = {
  open: true,
  anchor: drawerAnchorPositions.left,
};

export const AnchorRight = Template.bind({});
AnchorRight.args = {
  open: true,
  anchor: drawerAnchorPositions.right,
};

export const FixedWidthLeft = Template.bind({});
FixedWidthLeft.args = {
  open: true,
  width: 640,
  anchor: drawerAnchorPositions.left,
};

export const FixedWidthRight = Template.bind({});
FixedWidthRight.args = {
  open: true,
  width: 640,
  anchor: drawerAnchorPositions.right,
};
