import React from 'react'
import MuiTabPanel, {
  TabPanelProps as MuiTabPanelProps,
} from '@mui/lab/TabPanel'

export type TabPanelProps = MuiTabPanelProps

export const TabPanel: React.VFC<TabPanelProps> = ({ value, children }) => {
  return (
    <MuiTabPanel
      // css={[
      //   css`
      //     &.MuiTabPanel-root {
      //       ${tw`px-0`}
      //     }
      //   `,
      //   twin,
      // ]}
      value={value}
    >
      {children}
    </MuiTabPanel>
  )
}
