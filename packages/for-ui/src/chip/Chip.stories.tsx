import React from 'react';
import { Meta, Args } from '@storybook/react/types-6-0';
import { MdCheck } from 'react-icons/md';

import { LegacyText as Text } from '../Typography';
import { Chip } from './Chip';

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
