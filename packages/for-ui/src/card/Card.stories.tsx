import React from 'react';
import { MdMoreVert } from 'react-icons/md';
import { Meta } from '@storybook/react/types-6-0';
import { Card, CardBody, CardHeader } from './Card';

export default {
  title: 'Example / Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Basic = (): JSX.Element => {
  return (
    <Card>
      <CardHeader title="タイトル" action={<MdMoreVert size={24} />} />
      <CardBody>Body</CardBody>
    </Card>
  );
};
