import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Tab, TabProps } from './Tab';
import { Badge } from '../badge';

export default {
  title: 'Navigation / Tabs / Tab',
  component: Tab,
} as Meta;

export const Playground = {
  args: {
    label: 'ラベル',
    badge: <Badge label="99+" variant="text" intention="primary" />,
    disabled: false,
  } satisfies TabProps,
};
