import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import tw from 'twin.macro'

import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import { Button } from '../button/Button'

export default {
  title: 'Atom/Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story: any) => (
      <div tw="mt-10 flex flex-col h-screen w-screen gap-4">
        <Story />
      </div>
    ),
  ],
} as Meta

export const basic = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const toggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <div tw="flex flex-row gap-4">
        <Button
          id="demo-positioned-button"
          aria-controls="demo-positioned-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          twin={[tw`left-64`]}
          variant="contained"
          color="primary"
          onClick={toggle}
        >
          プロジェクト
        </Button>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>
            <a href="#">プロフィールAAAAAAAAAAAAAAAAAAAAAA</a>
          </MenuItem>
          <MenuItem>
            <a href="#">プロフィールAAAAAAAAAAAAAAAAAAAAAA</a>
          </MenuItem>
          <MenuItem>
            <a href="#">プロフィール</a>
          </MenuItem>
        </Menu>
      </div>
    </>
  )
}
