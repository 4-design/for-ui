import React from 'react'
import tw, { css, TwStyle } from 'twin.macro'
import MuiTabPanel, {
  TabPanelProps as MuiTabPanelProps,
} from '@material-ui/lab/TabPanel'
import { SerializedStyles } from '@emotion/react'

export interface TabPanelProps extends MuiTabPanelProps {
  twin?: (TwStyle | SerializedStyles)[]
}

export const TabPanel: React.VFC<TabPanelProps> = ({
  twin,
  value,
  children,
}) => {
  return (
    <MuiTabPanel
      css={[
        css`
          &.MuiTabPanel-root {
            ${tw`px-0`}
          }
        `,
        twin,
      ]}
      value={value}
    >
      {children}
    </MuiTabPanel>
  )
}
