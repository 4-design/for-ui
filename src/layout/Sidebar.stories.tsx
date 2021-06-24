import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { MdHome, MdGroup, MdFolder } from 'react-icons/md'
import { Sidebar, SidebarProps, SidebarMenu, SidebarMenuItem } from './Sidebar'

export default {
  title: 'Example/Layout/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<SidebarProps> = (args) => (
  <Sidebar {...args}>
    <SidebarMenu>
      <SidebarMenuItem href="/" icon={<MdHome />} label="ダッシュボード" />

      <SidebarMenuItem
        href="/applicants"
        icon={<MdGroup />}
        label="候補者一覧"
      />

      <SidebarMenuItem href="/orgs" icon={<MdFolder />} label="企業一覧" />
    </SidebarMenu>
  </Sidebar>
)

export const Default = Template.bind({})
Default.args = {
  logo: '/logo/relance.png',
}
