import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { MdNotifications } from 'react-icons/md'
import tw from 'twin.macro'

import { IconButton } from '../icon/Icon'
import { MenuItem } from '../menu'
import { Menu } from '../menu/Menu'
import { Text } from '../typography/Typography'
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
      <HeaderLeft>
        <Text variant="h3">SaaS一覧</Text>
      </HeaderLeft>
      <HeaderRight>
        <>
          <IconButton twin={[tw`bg-shade-white-default`]}>
            <MdNotifications size={36} />
          </IconButton>

          <div tw="relative ml-3">
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
