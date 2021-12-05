import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import 'twin.macro'

import { MdHome, MdGroup } from 'react-icons/md'
import { Sidebar, SidebarMenu, SidebarMenuItem } from './Sidebar'

export default {
  title: 'Example/Layout/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div tw="mt-10 flex flex-col h-screen w-screen gap-4">
        <Story />
      </div>
    ),
  ],
} as Meta

const Logo = () => (
  <a>
    <div tw="flex pl-8 pt-8">
      <img src="/logo/metis.png" width="145" height="42" alt="logo" />
    </div>
  </a>
)

export const SidebarTemplate = () => (
  <Sidebar logo={<Logo />}>
    <SidebarMenu>
      <SidebarMenuItem icon={<MdHome size={24} />} label="ダッシュボード" />

      <SidebarMenuItem icon={<MdGroup size={24} />} label="候補者一覧" active />

      <SidebarMenuItem icon={<MdHome size={24} />} label="ダッシュボード" />
    </SidebarMenu>
  </Sidebar>
)
