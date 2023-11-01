import React, { useState, useCallback, MouseEvent } from 'react';
import { Dropzone } from './Dropzone';
import { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Dropzone>

export default {
  title: 'Form / Dropzone',
  component: Dropzone,
  decorators: [
    (Story) => <Story />,
  ],
  argTypes: {
    multiple: { control: 'boolean' },
    message: { control: 'text' },
  },
} satisfies Meta<typeof Dropzone>

export const Basic: Story = {
  render: () => {
    const [filesState, setFilesState] = useState<File[]>([]);
    const multiple = true;

    const onDrop = useCallback(
      (files: File[]) => {
        if (!multiple && filesState.length > 0) {
          return;
        }
        setFilesState((prevState) => [...prevState, ...files]);
      },
      [multiple, filesState.length],
    );

    const onRemove = useCallback(
      (file: File) => (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFilesState((prevState) => {
          const newState = [...prevState];
          newState.splice(prevState.indexOf(file), 1);
          return [...newState];
        });
      },
      [],
    );

    return <Dropzone multiple={multiple} onDrop={onDrop} onRemove={onRemove} files={filesState} />;
  }
}
