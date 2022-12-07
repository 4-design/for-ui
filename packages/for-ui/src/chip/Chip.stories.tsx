import React from 'react';
import { Meta, Args } from '@storybook/react/types-6-0';
import { MdCheck } from 'react-icons/md';

import { Text } from '../typography/Typography';
import { Chip } from './Chip';
import { Button } from '../button'

export default {
  title: 'Form / Chip',
  component: Chip,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div className="mt-10 flex h-screen w-screen flex-col gap-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text', defaultValue: 'ラベル' },
    color: { control: 'select', options: ['default', 'negative', 'white'] },
    onDelete: { action: 'onDelete' },
  },
} as Meta;

export const Base = (args: Args) => (
  <div className="flex flex-col">
    <div className="mb-4 border-b">
      <Text variant="h3">Chip</Text>
    </div>

    <div className="flex flex-col gap-4">
      <div>
        <Chip label={args.label} color={args.color} />
      </div>
      <div>
        <Chip
          label={args.label}
          color={args.color}
          onDelete={
            args.onDelete ||
            (() => {
              console.error('hello');
            })
          }
        />
      </div>
      <div>
        <Chip label={args.label} color={args.color} leadingIcon={<MdCheck size={20} className="ml-0 mr-1" />} />
      </div>
      <div>
        <Chip label={args.label} color={args.color} trailingIcon={<MdCheck size={20} className="ml-0 mr-1" />} />
      </div>
    </div>
  </div>
);

export const LineUp = (args: Args) => {
  const [collapsed, setCollapsed] = React.useState(true)
  return (
    <div>
      <div className={`flex flex-wrap gap-1 w-80 bg-shade-dark-default ${collapsed ? 'max-h-16 overflow-hidden' : ''}`}>
        <Chip label="hello world" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
        <Chip label="hello" />
      </div>
      <Button onClick={() => {setCollapsed((v) => !v)}}>{ collapsed ? 'もっと見る' : '閉じる'}</Button>
    </div>
  )
}
