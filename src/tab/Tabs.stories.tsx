import React from 'react'
import 'twin.macro'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Tabs } from './Tabs'
import { TabPanel } from './TabPanel'
import { TabContext } from './TabContext'
import { Tab } from './Tab'

export default {
  title: 'Atom/Tabs',
  component: Tabs,
} as Meta

const Template: Story = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div className="flex flex-col">
      <h1>Tab</h1>

      <div className="flex flex-col mt-8">
        <TabContext value={value}>
          <Tabs onChange={handleChange}>
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </Tabs>

          <TabPanel value="1">
            <h1>Hello World 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>Hello World 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>Hello World 3</h1>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  )
}

const Template2: Story = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div className="flex flex-col">
      <h1>Reverse Tab</h1>

      <div className="flex flex-col mt-8">
        <TabContext value={value}>
          <Tabs onChange={handleChange} reverse={true}>
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </Tabs>

          <TabPanel value="1">
            <h1>Hello World 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>Hello World 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>Hello World 3</h1>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  )
}

export const DefaultTab = Template.bind({})
export const ReverseTab = Template2.bind({})
