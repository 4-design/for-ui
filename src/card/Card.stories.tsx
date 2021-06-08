import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Meta } from '@storybook/react/types-6-0'

import { Card, CardHeader, CardBody } from './Card'

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const Basic = (): JSX.Element => {
  return (
    <Card>
      <CardHeader title="タイトル" action={<MoreVertIcon />} />
      <CardBody>Body</CardBody>
    </Card>
  )
}
