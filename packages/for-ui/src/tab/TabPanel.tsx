import React from 'react';
import MuiTabPanel, { TabPanelProps as MuiTabPanelProps } from '@mui/lab/TabPanel';
import { fsx } from '../system/fsx';

export type TabPanelProps = MuiTabPanelProps;

export const TabPanel: React.FC<TabPanelProps> = ({ value, children }) => {
  return (
    <MuiTabPanel
      classes={{
        root: fsx(['px-0']),
      }}
      value={value}
    >
      {children}
    </MuiTabPanel>
  );
};
