import React, { useState } from 'react'
import 'twin.macro'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './Button'
import MailIcon from '@material-ui/icons/Mail'

export default {
  title: 'Atom/Button',
  component: Button,
  decorators: [
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

const Template: Story<ButtonProps> = (args) => {
  const [pending, setPending] = useState(false)
  const handleSubmit = () => {
    setPending(!pending)
  }

  return (
    <Button {...args} pending={pending} onClick={handleSubmit}>
      登録
    </Button>
  )
}

export const basic = () => (
  <>
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
  </>
)

export const disabled = () => (
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

export const startIcon = () => (
  <>
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
  </>
)

export const endIcon = () => (
  <>
    <div tw="flex flex-row gap-4">
      <Button
        color="primary"
        variant="contained"
        endIcon={<MailIcon />}
        disabled
      >
        登録する
      </Button>

      <Button
        color="primary"
        variant="outlined"
        endIcon={<MailIcon />}
        disabled
      >
        登録する
      </Button>

      <Button color="primary" variant="text" endIcon={<MailIcon />} disabled>
        登録する
      </Button>
    </div>
  </>
)

export const loading = () => (
  <>
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
  </>
)
