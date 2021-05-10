import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Sidebar, SidebarProps, SidebarMenu, SidebarMenuItem } from './Sidebar'
import HomeIcon from '@material-ui/icons/Home'
import GroupIcon from '@material-ui/icons/Group'
import FolderIcon from '@material-ui/icons/Folder'

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
      <SidebarMenuItem href="/" icon={<HomeIcon />} label="ダッシュボード" />

      <SidebarMenuItem
        href="/applicants"
        icon={<GroupIcon />}
        label="候補者一覧"
      />

      <SidebarMenuItem href="/orgs" icon={<FolderIcon />} label="企業一覧" />
    </SidebarMenu>
  </Sidebar>
)

export const Default = Template.bind({})
Default.args = {
  logo: '/logo/relance.png',
}
