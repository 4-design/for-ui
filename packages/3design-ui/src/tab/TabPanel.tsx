import React from 'react'
import MuiTabPanel, {
  TabPanelProps as MuiTabPanelProps,
} from '@mui/lab/TabPanel'
import clsx from 'clsx'

export type TabPanelProps = MuiTabPanelProps

export const TabPanel: React.FC<TabPanelProps> = ({ value, children }) => {
  return (
    <MuiTabPanel
      classes={{
        root: clsx(['px-0']),
      }}
      value={value}
    >
      {children}
    </MuiTabPanel>
  )
}
