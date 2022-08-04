import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { MdAdd, MdEdit } from 'react-icons/md'
import { Text } from '../typography/Typography'
import { Button } from './Button'

export default {
  title: 'General / Button',
  component: Button,
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
} as Meta

export const Filled = (): JSX.Element => (
  <div className="flex flex-col gap-8">
    <div>
      <div className="mb-4 border-b">
        <Text variant="h3">Button/Filled/Large</Text>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Button variant="filled">登録する</Button>

          <Button variant="filled" disabled>
            登録する
          </Button>

          <Button variant="filled" loading>
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <Button variant="filled" startIcon={<MdAdd size={20} />}>
            登録する
          </Button>

          <Button variant="filled" startIcon={<MdAdd size={20} />} disabled>
            登録する
          </Button>

          <Button
            variant="filled"
            startIcon={<MdAdd size={20} />}
            loadingPosition="start"
            loading
          >
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <Button variant="filled" endIcon={<MdEdit size={20} />}>
            登録する
          </Button>

          <Button variant="filled" endIcon={<MdEdit size={20} />} disabled>
            登録する
          </Button>

          <Button
            variant="filled"
            endIcon={<MdEdit size={20} />}
            loadingPosition="end"
            loading
          >
            登録する
          </Button>
        </div>
      </div>
    </div>

    <div>
      <div className="mb-4 border-b">
        <Text variant="h3">Button/Contained/Medium</Text>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Button size="medium" variant="contained">
            登録する
          </Button>

          <Button size="medium" variant="contained" disabled>
            登録する
          </Button>

          <Button size="medium" variant="contained" loading>
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export const Contained = (): JSX.Element => (
  <div className="flex flex-col gap-8">
    <div>
      <div className="mb-4 border-b">
        <Text variant="h3">Button/Contained/Large</Text>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Button variant="contained">登録する</Button>

          <Button variant="contained" disabled>
            登録する
          </Button>

          <Button variant="contained" loading>
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>
      </div>
    </div>

    <div>
      <div className="mb-4 border-b">
        <Text variant="h3">Button/Contained/Medium</Text>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Button size="medium" variant="contained">
            登録する
          </Button>

          <Button size="medium" variant="contained" disabled>
            登録する
          </Button>

          <Button size="medium" variant="contained" loading>
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export const Outlined = (): JSX.Element => (
  <div className="flex flex-col gap-8">
    <div>
      <div className="mb-4 border-b">
        <Text variant="h3">Button/Outlined/Large</Text>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Button variant="outlined">登録する</Button>

          <Button variant="outlined" disabled>
            登録する
          </Button>

          <Button variant="outlined" loading loadingPosition="center">
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <Button variant="outlined" startIcon={<MdAdd size={20} />}>
            登録する
          </Button>

          <Button variant="outlined" startIcon={<MdAdd size={20} />} disabled>
            登録する
          </Button>

          <Button
            variant="outlined"
            startIcon={<MdAdd size={20} />}
            loading
            loadingPosition="start"
          >
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <Button variant="outlined" endIcon={<MdEdit size={20} />}>
            登録する
          </Button>

          <Button variant="outlined" endIcon={<MdEdit size={20} />} disabled>
            登録する
          </Button>

          <Button
            variant="outlined"
            endIcon={<MdEdit size={20} />}
            loading
            loadingPosition="end"
          >
            登録する
          </Button>
        </div>
      </div>
    </div>

    <div>
      <div className="mb-4 border-b">
        <Text variant="h3">Button/Outlined/Medium</Text>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Button size="medium" variant="outlined">
            登録する
          </Button>

          <Button size="medium" variant="outlined" disabled>
            登録する
          </Button>

          <Button size="medium" variant="outlined" loading>
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export const _Text = (): JSX.Element => (
  <div className="flex flex-col gap-8">
    <div>
      <div className="mb-4 border-b">
        <Text variant="h3">Button/Text/Large</Text>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Button variant="text">登録する</Button>

          <Button variant="text" disabled>
            登録する
          </Button>

          <Button variant="text" loading>
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>
      </div>
    </div>

    <div>
      <div className="mb-4 border-b">
        <Text variant="h3">Button/Text/Medium</Text>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Button size="medium" variant="text">
            登録する
          </Button>

          <Button size="medium" variant="text" disabled>
            登録する
          </Button>

          <Button size="medium" variant="text" loading>
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>
      </div>
    </div>

    <div>
      <div className="mb-4 border-b">
        <Text variant="h3">Button/Text/Small</Text>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Button variant="text" size="small">
            登録する
          </Button>

          <Button variant="text" size="small" disabled>
            登録する
          </Button>

          <Button variant="text" size="small" loading>
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>

        <div className="flex flex-col gap-4">
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
            loading
          >
            登録する
          </Button>
        </div>
      </div>
    </div>
  </div>
)
