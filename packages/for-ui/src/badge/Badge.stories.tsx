import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MdPersonOutline } from 'react-icons/md';
import { Badge } from './Badge';

export default {
  title: 'Example / Badge',
  component: Badge,
} as Meta;

const Template: Story = () => (
  <div className="flex flex-row gap-8">
    <div className="flex flex-col gap-4">
      <Badge label="注意書き" />
      <Badge label="注意書き" color="primary" />
      <Badge label="注意書き" color="native" />
    </div>
    <div className="flex flex-col gap-4">
      <Badge label="神田 柚奈" color="white" type="text" icon={<MdPersonOutline className="h-4 w-4" />} />
      <Badge label="神田 柚奈" color="white" type="text" />
      <Badge label="神田 柚奈" color="gray" type="text" icon={<MdPersonOutline className="h-4 w-4" />} />
      <Badge label="神田 柚奈" color="gray" type="text" />
      <Badge label="神田 柚奈" color="primary" type="text" icon={<MdPersonOutline className="h-4 w-4" />} />
      <Badge label="神田 柚奈" color="primary" type="text" />
      <Badge label="神田 柚奈" color="native" type="text" icon={<MdPersonOutline className="h-4 w-4" />} />
      <Badge label="神田 柚奈" color="native" type="text" />
    </div>
    <div className="flex flex-col gap-4">
      <Badge label="神田 柚奈" color="white" type="outline" icon={<MdPersonOutline className="h-4 w-4" />} />
      <Badge label="神田 柚奈" color="white" type="outline" />
      <Badge label="神田 柚奈" color="gray" type="outline" icon={<MdPersonOutline className="h-4 w-4" />} />
      <Badge label="神田 柚奈" color="gray" type="outline" />
      <Badge label="神田 柚奈" color="primary" type="outline" icon={<MdPersonOutline className="h-4 w-4" />} />
      <Badge label="神田 柚奈" color="primary" type="outline" />
      <Badge label="神田 柚奈" color="native" type="outline" icon={<MdPersonOutline className="h-4 w-4" />} />
      <Badge label="神田 柚奈" color="native" type="outline" />
    </div>
  </div>
);

export const DefaultBadge = Template.bind({});
DefaultBadge.args = {};
