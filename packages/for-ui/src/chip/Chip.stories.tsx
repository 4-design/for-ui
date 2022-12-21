import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Text } from '../typography/Typography';
import { Chip } from './Chip';
import { BsPaperclip } from 'react-icons/bs';

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

export const Base = () => (
  <div className="flex flex-col">
    <div className="mb-4 border-b">
      <Text variant="h3">Chip</Text>
    </div>

    <div className="flex flex-row gap-8">
      <div className="flex flex-col gap-4">
        <div>
          <Chip label="yuzuna_kanda.pdf" color="white" />
        </div>
        <div>
          <Chip label="yuzuna_kanda.pdf" clickable color="white" />
        </div>
        <div>
          <Chip label="yuzuna_kanda.pdf" color="white" leadingIcon={<BsPaperclip size={16} />} />
        </div>
        <div>
          <Chip label="yuzuna_kanda.pdf" clickable color="white" leadingIcon={<BsPaperclip size={16} />} />
        </div>

        <div>
          <Chip label="yuzuna_kanda.pdf" color="default" />
        </div>
        <div>
          <Chip label="yuzuna_kanda.pdf" clickable color="default" />
        </div>
        <div>
          <Chip label="yuzuna_kanda.pdf" color="default" leadingIcon={<BsPaperclip size={16} />} />
        </div>
        <div>
          <Chip label="yuzuna_kanda.pdf" clickable color="default" leadingIcon={<BsPaperclip size={16} />} />
        </div>

        <div>
          <Chip label="yuzuna_kanda.pdf" color="negative" />
        </div>
        <div>
          <Chip label="yuzuna_kanda.pdf" clickable color="negative" />
        </div>
        <div>
          <Chip label="yuzuna_kanda.pdf" color="negative" leadingIcon={<BsPaperclip size={16} />} />
        </div>
        <div>
          <Chip label="yuzuna_kanda.pdf" clickable color="negative" leadingIcon={<BsPaperclip size={16} />} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Chip
            label="yuzuna_kanda.pdf"
            onDelete={() => {
              console.info('ondelete');
            }}
            color="white"
          />
        </div>
        <div>
          <Chip
            label="yuzuna_kanda.pdf"
            onDelete={() => {
              console.info('ondelete');
            }}
            clickable
            color="white"
          />
        </div>
        <div>
          <Chip
            label="yuzuna_kanda.pdf"
            onDelete={() => {
              console.info('ondelete');
            }}
            color="white"
            leadingIcon={<BsPaperclip size={16} />}
          />
        </div>
        <div>
          <Chip
            label="yuzuna_kanda.pdf"
            onDelete={() => {
              console.info('ondelete');
            }}
            clickable
            color="white"
            leadingIcon={<BsPaperclip size={16} />}
          />
        </div>

        <div>
          <Chip
            label="yuzuna_kanda.pdf"
            onDelete={() => {
              console.info('ondelete');
            }}
            color="default"
          />
        </div>
        <div>
          <Chip
            label="yuzuna_kanda.pdf"
            onDelete={() => {
              console.info('ondelete');
            }}
            clickable
            color="default"
          />
        </div>
        <div>
          <Chip
            label="yuzuna_kanda.pdf"
            onDelete={() => {
              console.info('ondelete');
            }}
            color="default"
            leadingIcon={<BsPaperclip size={16} />}
          />
        </div>
        <div>
          <Chip
            label="yuzuna_kanda.pdf"
            onDelete={() => {
              console.info('ondelete');
            }}
            clickable
            color="default"
            leadingIcon={<BsPaperclip size={16} />}
          />
        </div>

        <div>
          <Chip
            label="yuzuna_kanda.pdf"
            onDelete={() => {
              console.info('ondelete');
            }}
            color="negative"
          />
        </div>
        <div>
          <Chip
            label="yuzuna_kanda.pdf"
            onDelete={() => {
              console.info('ondelete');
            }}
            clickable
            color="negative"
          />
        </div>
        <div>
          <Chip
            label="yuzuna_kanda.pdf"
            onDelete={() => {
              console.info('ondelete');
            }}
            color="negative"
            leadingIcon={<BsPaperclip size={16} />}
          />
        </div>
        <div>
          <Chip
            label="yuzuna_kanda.pdf"
            onDelete={() => {
              console.info('ondelete');
            }}
            clickable
            color="negative"
            leadingIcon={<BsPaperclip size={16} />}
          />
        </div>
      </div>
    </div>
  </div>
);
