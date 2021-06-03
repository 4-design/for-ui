import React, { useState } from 'react'
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant'
import { Story, Meta } from '@storybook/react/types-6-0'
import tw from 'twin.macro'

import { IconButton } from '../icon/Icon'
import { MenuItem } from '../menu'
import { Menu } from '../menu/Menu'
import { Header, HeaderLeft, HeaderRight } from './Header'

export default {
  title: 'Example/Layout/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = () => {
  const [open, _] = useState(false)

  return (
    <Header>
      <HeaderLeft></HeaderLeft>
      <HeaderRight>
        <>
          <IconButton twin={[tw`bg-white`]}>
            <NotificationImportantIcon />
          </IconButton>

          <div tw="relative ml-3">
            <div tw="ml-9">
              <IconButton
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                aria-haspopup={true}
              />
            </div>

            <Menu open={open}>
              <MenuItem>
                <a href="#" role="menuitem">
                  プロフィール
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" role="menuitem">
                  設定
                </a>
              </MenuItem>
            </Menu>
          </div>
        </>
      </HeaderRight>
    </Header>
  )
}

export const Default = Template.bind({})
