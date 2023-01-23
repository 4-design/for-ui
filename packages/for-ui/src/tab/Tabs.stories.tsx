import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tab } from './Tab';
import { TabContext } from './TabContext';
import { TabList } from './TabList';
import { TabPanel } from './TabPanel';
import { Tabs } from './Tabs';
import { Text } from '../text';
import { Badge } from '../badge';
import { TabsProps } from '@mui/material';

export default {
  title: 'Navigation / Tabs',
  component: Tabs,
} as Meta;

export const Playground = {
  args: {
    children: [...range(1, 9)].map((k) => (
      <Tab
        key={k}
        value={k}
        label={`Tab ${k}`}
        disabled={k % 3 === 0 ? true : false}
        badge={k % 4 === 0 ? <Badge label="99+" variant="text" color="primary" /> : undefined}
      />
    )),
    value: 1,
  } satisfies TabsProps,
};

export const DefaultTabs: Story = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col gap-10">
      <Text size="l" weight="bold">
        Tab Primary
      </Text>
      <div className="flex flex-col">
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} color="primary">
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" badge={<Badge label="99+" variant="text" color="primary" />} />
            <Tab value="4" label="Item Two disabled" disabled />
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

      <Text size="l" weight="bold">
        Tab Secondary
      </Text>
      <div className="flex flex-col">
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} color="secondary">
            <Tab value="1" label="Item One" minWidth={0} />
            {/* TODO: replace badge color primary with secondary */}
            <Tab value="2" label="Item Two" badge={<Badge label="99+" variant="text" color="primary" />} />
            <Tab value="4" label="Item Two disabled" disabled />
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
    </div>
  );
};

export const WithTabList: Story = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col gap-10">
      <Text size="l" weight="bold">
        Tab Primary
      </Text>
      <div className="flex flex-col">
        <TabContext value={value}>
          <TabList onChange={handleChange} color="primary">
            <Tab value="1" label="Item One" minWidth={0} />
            <Tab value="2" label="Item Two" badge={<Badge label="99+" variant="text" color="primary" />} />
            <Tab value="4" label="Item Two disabled" disabled />
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

      <Text size="l" weight="bold">
        Tab Secondary
      </Text>
      <div className="flex flex-col">
        <TabContext value={value}>
          <TabList onChange={handleChange} color="secondary">
            <Tab value="1" label="Item One" minWidth={0} />
            {/* TODO: replace badge color primary with secondary */}
            <Tab value="2" label="Item Two" badge={<Badge label="99+" variant="text" color="primary" />} />
            <Tab value="4" label="Item Two disabled" disabled />
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
    </div>
  );
};

function* range(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}
