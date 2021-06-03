import React, { useState } from 'react'
import FolderIcon from '@material-ui/icons/Folder'
import GroupIcon from '@material-ui/icons/Group'
import HomeIcon from '@material-ui/icons/Home'
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant'
import { Story, Meta } from '@storybook/react/types-6-0'
import tw from 'twin.macro'

import { IconButton } from '../icon/Icon'
import { MenuItem } from '../menu'
import { Menu } from '../menu/Menu'
import { Header, HeaderLeft, HeaderRight } from './Header'
import { Sidebar, SidebarMenu, SidebarMenuItem } from './Sidebar'

export default {
  title: 'Example/Layout/App',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = () => {
  const [open, _] = useState(false)

  return (
    <div tw="h-screen flex overflow-hidden">
      <Sidebar logo="/logo/relance.png">
        <SidebarMenu>
          <SidebarMenuItem
            href="/"
            icon={<HomeIcon />}
            label="ダッシュボード"
          />

          <SidebarMenuItem
            href="/applicants"
            icon={<GroupIcon />}
            label="候補者一覧"
          />

          <SidebarMenuItem
            href="/orgs"
            icon={<FolderIcon />}
            label="企業一覧"
          />
        </SidebarMenu>
      </Sidebar>
      <div tw="flex flex-col w-0 flex-1 overflow-hidden">
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

        <div tw="w-full overflow-x-hidden flex flex-col">
          <main tw="w-full flex-grow pt-2 pl-5">
            <h1 tw="flex items-center h-10">Title</h1>
          </main>
        </div>
      </div>
    </div>
  )
}

export const Default = Template.bind({})
