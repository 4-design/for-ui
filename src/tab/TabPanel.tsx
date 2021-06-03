import React from 'react'
import { SerializedStyles } from '@emotion/react'
import MuiTabPanel, {
  TabPanelProps as MuiTabPanelProps,
} from '@material-ui/lab/TabPanel'
import tw, { css, TwStyle } from 'twin.macro'

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
