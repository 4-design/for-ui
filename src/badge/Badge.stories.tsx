import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { MdMail } from 'react-icons/md'
import { Badge } from './Badge'

export default {
  title: 'Example / Badge',
  component: Badge,
} as Meta

const Template: Story = () => (
  <Badge badgeContent={4}>
    <MdMail size={24} />
  </Badge>
)

export const DefaultBadge = Template.bind({})
DefaultBadge.args = {}

export const CustomBadge = () => {
  return (
    <div className="w-10 h-10">
      <Badge badgeContent={4}>
        <MdMail size={24} />
      </Badge>

      <div className="bg-shade-dark-default w-10 h-10">test</div>
    </div>
  )
}
