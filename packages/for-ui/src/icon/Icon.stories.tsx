import React from 'react';
import { MdNotifications } from 'react-icons/md';
import { Meta, Story } from '@storybook/react/types-6-0';
import { IconButton } from './Icon';

export default {
  title: 'Example / IconButton',
  component: IconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => (
  <IconButton {...args}>
    <MdNotifications size={24} />
  </IconButton>
);

export const Default = Template.bind({});
Default.args = {};
