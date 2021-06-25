import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import 'twin.macro'

import { MdHome, MdGroup, MdFolder } from 'react-icons/md'
import { Sidebar, SidebarMenu, SidebarMenuItem } from './Sidebar'

export default {
  title: 'Example/Layout/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Logo = () => (
  <div tw="flex items-center flex-shrink-0 px-6 h-20">
    <img tw="w-auto h-9" src="/logo/relance.png" alt="logo" />
  </div>
)

export const SidebarTemplate = () => (
  <Sidebar logo={<Logo />}>
    <SidebarMenu>
      <SidebarMenuItem href="/" icon={<MdHome />} label="ダッシュボード" />

      <SidebarMenuItem
        href="/applicants"
        icon={<MdGroup />}
        label="候補者一覧"
        active
      />

      <SidebarMenuItem href="/orgs" icon={<MdFolder />} label="企業一覧" />
    </SidebarMenu>
  </Sidebar>
)
