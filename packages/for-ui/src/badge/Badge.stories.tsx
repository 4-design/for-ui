import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MdPersonOutline } from 'react-icons/md';
import { Badge } from './Badge';
import { MdError } from 'react-icons/md';

export default {
  title: 'Example / Badge',
  component: Badge,
} as Meta;

const ConstantBadgeTemplate: Story = () => (
  <div className="flex flex-row gap-8">
    <div className="flex flex-col gap-4">
      <Badge label="注意書き" icon={<MdError className="h-4 w-4" />} />
      <Badge label="注意書き" icon={<MdError className="h-4 w-4" />} color="primary" />
      <Badge label="注意書き" icon={<MdError className="h-4 w-4" />} color="native" />
    </div>
  </div>
);

const TextBadgeTemplate: Story = () => {
  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-col gap-4">
        <Badge label="神田 柚奈" color="white" variant="text" icon={<MdPersonOutline className="h-4 w-4" />} />
        <Badge label="神田 柚奈" color="white" variant="text" />
        <Badge label="神田 柚奈" color="gray" variant="text" icon={<MdPersonOutline className="h-4 w-4" />} />
        <Badge label="神田 柚奈" color="gray" variant="text" />
        <Badge label="神田 柚奈" color="primary" variant="text" icon={<MdPersonOutline className="h-4 w-4" />} />
        <Badge label="神田 柚奈" color="primary" variant="text" />
        <Badge label="神田 柚奈" color="native" variant="text" icon={<MdPersonOutline className="h-4 w-4" />} />
        <Badge label="神田 柚奈" color="native" variant="text" />
      </div>
    </div>
  );
};

const OutlineBadgeTemplate: Story = () => {
  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-col gap-4">
        <Badge label="神田 柚奈" color="white" variant="outline" icon={<MdPersonOutline className="h-4 w-4" />} />
        <Badge label="神田 柚奈" color="white" variant="outline" />
        <Badge label="神田 柚奈" color="gray" variant="outline" icon={<MdPersonOutline className="h-4 w-4" />} />
        <Badge label="神田 柚奈" color="gray" variant="outline" />
        <Badge label="神田 柚奈" color="primary" variant="outline" icon={<MdPersonOutline className="h-4 w-4" />} />
        <Badge label="神田 柚奈" color="primary" variant="outline" />
        <Badge label="神田 柚奈" color="native" variant="outline" icon={<MdPersonOutline className="h-4 w-4" />} />
        <Badge label="神田 柚奈" color="native" variant="outline" />
      </div>
    </div>
  );
};

export const DefaultBadge = ConstantBadgeTemplate.bind({});
DefaultBadge.args = {};

export const TextBadge = TextBadgeTemplate.bind({});
TextBadge.args = {};

export const OutlineBadge = OutlineBadgeTemplate.bind({});
OutlineBadge.args = {};
