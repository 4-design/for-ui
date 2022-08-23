import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Text } from '../typography/Typography'
import { Drawer, DrawerAnchor } from '.'

export default {
  title: 'Feedback / Drawer',
  component: Drawer,
  argTypes: {
    backgroundcolor: { control: 'color' },
    open: { control: 'boolean' },
    anchor: { options: ['top', 'left', 'right', 'bottom'], control: 'select' },
    onClose: { action: 'onClose' },
  },
  decorators: [
    (Story: Story) => (
      <div className="w-184">
        <div className="mb-4 border-b">
          <Text variant="h3">{'Drawer'}</Text>
        </div>

        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story = (args) => (
  <Drawer open={args.open} {...args}>
    <Text variant="h4">Title</Text>
    <Text>Children</Text>
    <Text>Children1/Children2</Text>
  </Drawer>
)

export const Base = Template.bind({})
Base.args = {
  open: true,
  backgroundcolor: '#fff',
}

export const WithHeaderChildren = Template.bind({})
WithHeaderChildren.args = {
  open: true,
  headerChildren: <Text variant="h2">Header</Text>,
}

export const AnchorTop = Template.bind({})
AnchorTop.args = {
  open: true,
  anchor: DrawerAnchor.top,
}

export const AnchorBottom = Template.bind({})
AnchorBottom.args = {
  open: true,
  anchor: DrawerAnchor.bottom,
}

export const AnchorLeft = Template.bind({})
AnchorLeft.args = {
  open: true,
  anchor: DrawerAnchor.left,
}

export const AnchorRight = Template.bind({})
AnchorRight.args = {
  open: true,
  anchor: DrawerAnchor.right,
}
