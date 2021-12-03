import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import 'twin.macro'
import { Button } from '../button/Button'
import { Text } from '../typography/Typography'
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'

export default {
  title: 'Atom/Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div tw="mt-10 flex flex-col h-screen w-screen gap-4">
        <Story />
      </div>
    ),
  ],
} as Meta

export const Base = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const toggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div tw="flex flex-col gap-8">
      <div tw="border-b mb-4">
        <Text variant="h3">Button/Contained/Large</Text>
      </div>

      <div>
        <Button
          id="demo-positioned-button"
          aria-controls="demo-positioned-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          color="primary"
          onClick={toggle}
        >
          プロジェクト
        </Button>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem>
            <a href="#">プロフィール</a>
          </MenuItem>
          <MenuItem>
            <a href="#">設定</a>
          </MenuItem>
          <MenuItem>
            <a href="#">プロフィール</a>
          </MenuItem>
        </Menu>
      </div>
    </div>
  )
}
