import React from 'react'
import 'twin.macro'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Badge } from './Badge'
import MailIcon from '@material-ui/icons/Mail'

export default {
  title: 'Atom/Badge',
  component: Badge,
} as Meta

const Template: Story = () => (
  <Badge badgeContent={4}>
    <MailIcon />
  </Badge>
)

export const DefaultBadge = Template.bind({})
DefaultBadge.args = {}
