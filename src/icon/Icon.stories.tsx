import React from 'react'
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant'
import { Story, Meta } from '@storybook/react/types-6-0'

import { IconButton } from './Icon'

export default {
  title: 'Example/icon/IconButton',
  component: IconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = (args) => (
  <IconButton {...args}>
    <NotificationImportantIcon />
  </IconButton>
)

export const Default = Template.bind({})
Default.args = {
  logo: '/logo/relance.png',
}
