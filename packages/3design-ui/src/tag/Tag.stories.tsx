import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Tag } from './Tag';

export default {
  title: 'Example / Tag',
  component: Tag,
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
  },
} as Meta;

export const Base = () => (
  <>
    <div>
      <Tag label="React" />
      <Tag label="React" className="bg-shade-dark-default text-shade-white-default" />
      <Tag label="onDelete" onDelete={() => console.info('onDelete')} />
    </div>
  </>
);
