import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Card, CardHeader, CardBody } from './Card'
import MoreVertIcon from '@material-ui/icons/MoreVert'

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const basic = () => {
  return (
    <Card>
      <CardHeader title="タイトル" action={<MoreVertIcon />} />
      <CardBody>Body</CardBody>
    </Card>
  )
}
