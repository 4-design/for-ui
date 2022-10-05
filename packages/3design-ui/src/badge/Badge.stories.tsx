import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MdMail } from 'react-icons/md';
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
