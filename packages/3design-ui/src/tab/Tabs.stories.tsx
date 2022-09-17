import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tab } from './Tab';
import { TabContext } from './TabContext';
import { TabList } from './TabList';
import { TabPanel } from './TabPanel';
import { Tabs } from './Tabs';

export default {
  title: 'Navigation / Tab',
  component: Tabs,
} as Meta;

const Template: Story = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col">
      <h1>Tab</h1>

      <div className="mt-8 flex flex-col">
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange}>
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </Tabs>

          <TabPanel value="1">
            <h1>secondary 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>secondary 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>secondary 3</h1>
          </TabPanel>
        </TabContext>
      </div>

      <div className="mt-8 flex flex-col">
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} color="primary">
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </Tabs>

          <TabPanel value="1">
            <h1>primary 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>primary 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>primary 3</h1>
          </TabPanel>
        </TabContext>
      </div>

      <div className="mt-8 flex flex-col">
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} noBorder>
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </Tabs>

          <TabPanel value="1">
            <h1>noBorder 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>noBorder 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>noBorder 3</h1>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

const Template2: Story = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col">
      <h1>Reverse Tab</h1>
      <div className="mt-8 flex flex-col">
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} reverse>
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </Tabs>

          <TabPanel value="1">
            <h1>secondary 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>secondary 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>secondary 3</h1>
          </TabPanel>
        </TabContext>
      </div>

      <div className="mt-8 flex flex-col">
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} color="primary" reverse>
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </Tabs>

          <TabPanel value="1">
            <h1>primary 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>primary 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>primary 3</h1>
          </TabPanel>
        </TabContext>
      </div>

      <div className="mt-8 flex flex-col">
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} color="shade" reverse>
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </Tabs>

          <TabPanel value="1">
            <h1>shade 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>shade 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>shade 3</h1>
          </TabPanel>
        </TabContext>
      </div>

      <div className="mt-8 flex flex-col">
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} color="shade" reverse noBorder>
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </Tabs>

          <TabPanel value="1">
            <h1>noBorder 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>noBorder 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>noBorder 3</h1>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export const DefaultTab = Template.bind({});
export const ReverseTab = Template2.bind({});

export const WithTabList: Story = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col">
      <h1>Tab</h1>

      <div className="mt-8 flex flex-col">
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </TabList>

          <TabPanel value="1">
            <h1>secondary 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>secondary 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>secondary 3</h1>
          </TabPanel>
        </TabContext>
      </div>

      <div className="mt-8 flex flex-col">
        <TabContext value={value}>
          <TabList onChange={handleChange} color="primary">
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </TabList>

          <TabPanel value="1">
            <h1>primary 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>primary 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>primary 3</h1>
          </TabPanel>
        </TabContext>
      </div>

      <div className="mt-8 flex flex-col">
        <TabContext value={value}>
          <TabList onChange={handleChange} color="shade">
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </TabList>

          <TabPanel value="1">
            <h1>shade 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>shade 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>shade 3</h1>
          </TabPanel>
        </TabContext>
      </div>

      <div className="mt-8 flex flex-col">
        <TabContext value={value}>
          <TabList onChange={handleChange} color="shade" noBorder>
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" />
            <Tab value="3" label="Item Three" />
          </TabList>

          <TabPanel value="1">
            <h1>noBorder 1</h1>
          </TabPanel>
          <TabPanel value="2">
            <h1>noBorder 2</h1>
          </TabPanel>
          <TabPanel value="3">
            <h1>noBorder 3</h1>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};
