import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import 'twin.macro'
import { MdAdd, MdEdit } from 'react-icons/md'
import { Text } from '../typography/Typography'
import { Button } from './Button'

export default {
  title: 'Atom/Button',
  component: Button,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div tw="mt-10 flex flex-col h-screen w-screen gap-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const Contained = (): JSX.Element => (
  <div tw="flex flex-col gap-8">
    <div>
      <div tw="border-b mb-4">
        <Text variant="h3">Button/Contained/Large</Text>
      </div>

      <div tw="flex flex-row gap-8">
        <div tw="flex flex-col gap-4">
          <Button variant="contained">登録する</Button>

          <Button variant="contained" disabled>
            登録する
          </Button>

          <Button variant="contained" pending>
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button variant="contained" startIcon={<MdAdd size={20} />}>
            登録する
          </Button>

          <Button variant="contained" startIcon={<MdAdd size={20} />} disabled>
            登録する
          </Button>

          <Button
            variant="contained"
            startIcon={<MdAdd size={20} />}
            loadingPosition="start"
            pending
          >
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button variant="contained" endIcon={<MdEdit size={20} />}>
            登録する
          </Button>

          <Button variant="contained" endIcon={<MdEdit size={20} />} disabled>
            登録する
          </Button>

          <Button
            variant="contained"
            endIcon={<MdEdit size={20} />}
            loadingPosition="end"
            pending
          >
            登録する
          </Button>
        </div>
      </div>
    </div>

    <div>
      <div tw="border-b mb-4">
        <Text variant="h3">Button/Contained/Medium</Text>
      </div>

      <div tw="flex flex-row gap-8">
        <div tw="flex flex-col gap-4">
          <Button size="medium" variant="contained">
            登録する
          </Button>

          <Button size="medium" variant="contained" disabled>
            登録する
          </Button>

          <Button size="medium" variant="contained" pending>
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button
            size="medium"
            variant="contained"
            startIcon={<MdAdd size={20} />}
          >
            登録する
          </Button>

          <Button
            size="medium"
            variant="contained"
            startIcon={<MdAdd size={20} />}
            disabled
          >
            登録する
          </Button>

          <Button
            size="medium"
            variant="contained"
            startIcon={<MdAdd size={20} />}
            loadingPosition="start"
            pending
          >
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button
            size="medium"
            variant="contained"
            endIcon={<MdEdit size={20} />}
          >
            登録する
          </Button>

          <Button
            size="medium"
            variant="contained"
            endIcon={<MdEdit size={20} />}
            disabled
          >
            登録する
          </Button>

          <Button
            size="medium"
            variant="contained"
            endIcon={<MdEdit size={20} />}
            loadingPosition="end"
            pending
          >
            登録する
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export const Outlined = (): JSX.Element => (
  <div tw="flex flex-col gap-8">
    <div>
      <div tw="border-b mb-4">
        <Text variant="h3">Button/Outlined/Large</Text>
      </div>

      <div tw="flex flex-row gap-8">
        <div tw="flex flex-col gap-4">
          <Button variant="outlined">登録する</Button>

          <Button variant="outlined" disabled>
            登録する
          </Button>

          <Button variant="outlined" pending loadingPosition="center">
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button variant="outlined" startIcon={<MdAdd size={20} />}>
            登録する
          </Button>

          <Button variant="outlined" startIcon={<MdAdd size={20} />} disabled>
            登録する
          </Button>

          <Button
            variant="outlined"
            startIcon={<MdAdd size={20} />}
            pending
            loadingPosition="start"
          >
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button variant="outlined" endIcon={<MdEdit size={20} />}>
            登録する
          </Button>

          <Button variant="outlined" endIcon={<MdEdit size={20} />} disabled>
            登録する
          </Button>

          <Button
            variant="outlined"
            endIcon={<MdEdit size={20} />}
            pending
            loadingPosition="end"
          >
            登録する
          </Button>
        </div>
      </div>
    </div>

    <div>
      <div tw="border-b mb-4">
        <Text variant="h3">Button/Outlined/Medium</Text>
      </div>

      <div tw="flex flex-row gap-8">
        <div tw="flex flex-col gap-4">
          <Button size="medium" variant="outlined">
            登録する
          </Button>

          <Button size="medium" variant="outlined" disabled>
            登録する
          </Button>

          <Button size="medium" variant="outlined" pending>
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button
            size="medium"
            variant="outlined"
            startIcon={<MdAdd size={20} />}
          >
            登録する
          </Button>

          <Button
            size="medium"
            variant="outlined"
            startIcon={<MdAdd size={20} />}
            disabled
          >
            登録する
          </Button>

          <Button
            size="medium"
            variant="outlined"
            startIcon={<MdAdd size={20} />}
            loadingPosition="start"
            pending
          >
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button
            size="medium"
            variant="outlined"
            endIcon={<MdEdit size={20} />}
          >
            登録する
          </Button>

          <Button
            size="medium"
            variant="outlined"
            endIcon={<MdEdit size={20} />}
            disabled
          >
            登録する
          </Button>

          <Button
            size="medium"
            variant="outlined"
            endIcon={<MdEdit size={20} />}
            loadingPosition="end"
            pending
          >
            登録する
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export const _Text = (): JSX.Element => (
  <div tw="flex flex-col gap-8">
    <div>
      <div tw="border-b mb-4">
        <Text variant="h3">Button/Text/Large</Text>
      </div>

      <div tw="flex flex-row gap-8">
        <div tw="flex flex-col gap-4">
          <Button variant="text">登録する</Button>

          <Button variant="text" disabled>
            登録する
          </Button>

          <Button variant="text" pending>
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button variant="text" startIcon={<MdAdd size={20} />}>
            登録する
          </Button>

          <Button variant="text" startIcon={<MdAdd size={20} />} disabled>
            登録する
          </Button>

          <Button
            variant="text"
            startIcon={<MdAdd size={20} />}
            loadingPosition="start"
            pending
          >
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button variant="text" endIcon={<MdEdit size={20} />}>
            登録する
          </Button>

          <Button variant="text" endIcon={<MdEdit size={20} />} disabled>
            登録する
          </Button>

          <Button
            variant="text"
            endIcon={<MdEdit size={20} />}
            loadingPosition="end"
            pending
          >
            登録する
          </Button>
        </div>
      </div>
    </div>

    <div>
      <div tw="border-b mb-4">
        <Text variant="h3">Button/Text/Medium</Text>
      </div>

      <div tw="flex flex-row gap-8">
        <div tw="flex flex-col gap-4">
          <Button size="medium" variant="text">
            登録する
          </Button>

          <Button size="medium" variant="text" disabled>
            登録する
          </Button>

          <Button size="medium" variant="text" pending>
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button size="medium" variant="text" startIcon={<MdAdd size={20} />}>
            登録する
          </Button>

          <Button
            size="medium"
            variant="text"
            startIcon={<MdAdd size={20} />}
            disabled
          >
            登録する
          </Button>

          <Button
            size="medium"
            variant="text"
            startIcon={<MdAdd size={20} />}
            loadingPosition="start"
            pending
          >
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button size="medium" variant="text" endIcon={<MdEdit size={20} />}>
            登録する
          </Button>

          <Button
            size="medium"
            variant="text"
            endIcon={<MdEdit size={20} />}
            disabled
          >
            登録する
          </Button>

          <Button
            size="medium"
            variant="text"
            endIcon={<MdEdit size={20} />}
            loadingPosition="end"
            pending
          >
            登録する
          </Button>
        </div>
      </div>
    </div>

    <div>
      <div tw="border-b mb-4">
        <Text variant="h3">Button/Text/Small</Text>
      </div>

      <div tw="flex flex-row gap-8">
        <div tw="flex flex-col gap-4">
          <Button variant="text" size="small">
            登録する
          </Button>

          <Button variant="text" size="small" disabled>
            登録する
          </Button>

          <Button variant="text" size="small" pending>
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button variant="text" size="small" startIcon={<MdAdd size={20} />}>
            登録する
          </Button>

          <Button
            variant="text"
            size="small"
            startIcon={<MdAdd size={20} />}
            disabled
          >
            登録する
          </Button>

          <Button
            variant="text"
            size="small"
            startIcon={<MdAdd size={20} />}
            loadingPosition="start"
            pending
          >
            登録する
          </Button>
        </div>

        <div tw="flex flex-col gap-4">
          <Button variant="text" size="small" endIcon={<MdEdit size={20} />}>
            登録する
          </Button>

          <Button
            variant="text"
            size="small"
            endIcon={<MdEdit size={20} />}
            disabled
          >
            登録する
          </Button>

          <Button
            variant="text"
            size="small"
            endIcon={<MdEdit size={20} />}
            loadingPosition="end"
            pending
          >
            登録する
          </Button>
        </div>
      </div>
    </div>
  </div>
)
