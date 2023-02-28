import React from 'react';
import { MdMail } from 'react-icons/md';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Badge } from './Badge';

export default {
  title: 'Example / Badge',
  component: Badge,
} as Meta;

const Template: Story = () => (
  <Badge badgeContent={4}>
    <MdMail size={24} />
  </Badge>
);

export const DefaultBadge = Template.bind({});
DefaultBadge.args = {};
