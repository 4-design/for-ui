import React from 'react'
import 'twin.macro'
import MailIcon from '@material-ui/icons/Mail'
import { Meta } from '@storybook/react/types-6-0'

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

export const basic = (): JSX.Element => (
  <div>
    <div tw="flex flex-row gap-4">
      <Button color="primary" variant="contained">
        登録する
      </Button>

      <Button color="primary" variant="outlined">
        登録する
      </Button>

      <Button color="primary" variant="text">
        登録する
      </Button>
    </div>

    <div tw="flex flex-row gap-4">
      <Button color="default" variant="contained">
        登録する
      </Button>

      <Button color="default" variant="outlined">
        登録する
      </Button>

      <Button color="default" variant="text">
        登録する
      </Button>
    </div>

    <div tw="flex flex-row gap-4">
      <Button color="danger" variant="contained">
        登録する
      </Button>

      <Button color="danger" variant="outlined">
        登録する
      </Button>

      <Button color="danger" variant="text">
        登録する
      </Button>
    </div>
  </div>
)

export const disabled = (): JSX.Element => (
  <>
    <div tw="flex flex-row gap-4">
      <Button color="primary" variant="contained" disabled>
        登録する
      </Button>

      <Button color="primary" variant="outlined" disabled>
        登録する
      </Button>

      <Button color="primary" variant="text" disabled>
        登録する
      </Button>
    </div>
  </>
)

export const startIcon = (): JSX.Element => (
  <div tw="flex flex-row gap-4">
    <Button
      color="primary"
      variant="contained"
      startIcon={<MailIcon />}
      disabled
    >
      登録する
    </Button>

    <Button
      color="primary"
      variant="outlined"
      startIcon={<MailIcon />}
      disabled
    >
      登録する
    </Button>

    <Button color="primary" variant="text" startIcon={<MailIcon />} disabled>
      登録する
    </Button>
  </div>
)

export const endIcon = (): JSX.Element => (
  <div tw="flex flex-row gap-4">
    <Button color="primary" variant="contained" endIcon={<MailIcon />} disabled>
      登録する
    </Button>

    <Button color="primary" variant="outlined" endIcon={<MailIcon />} disabled>
      登録する
    </Button>

    <Button color="primary" variant="text" endIcon={<MailIcon />} disabled>
      登録する
    </Button>
  </div>
)

export const Loading = (): JSX.Element => (
  <div tw="flex flex-row gap-4">
    <Button pending color="primary" variant="contained">
      登録する
    </Button>

    <Button pending color="primary" variant="outlined">
      登録する
    </Button>

    <Button pending color="primary" variant="text">
      登録する
    </Button>
  </div>
)
