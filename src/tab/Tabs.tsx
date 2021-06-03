import React from 'react'
import tw, { css, TwStyle } from 'twin.macro'
import Box from '@material-ui/core/Box'
import TabList, { TabListProps } from '@material-ui/lab/TabList'
import { SerializedStyles } from '@emotion/react'

export interface TabsProps extends TabListProps {
  noBorder?: boolean
  reverse?: boolean
  twin?: (TwStyle | SerializedStyles)[]
}

export const Tabs: React.VFC<TabsProps> = ({
  twin,
  noBorder = false,
  reverse = false,
  onChange,
  children,
  ...rest
}) => {
  return (
    <TabList
      onChange={onChange}
      aria-label="lab API tabs example"
      css={[
        css`
          &.MuiTabs-root {
            ${reverse
              ? tw`(border-transparent border-t-2)!`
              : tw`(border-low border-b-2)!`}
          }
          & .MuiTabs-indicator {
            ${tw`(bg-primary-main)!`}
            ${reverse && tw`top-0`}
          }
        `,
        noBorder && tw`border-none!`,
        twin,
      ]}
      {...rest}
    >
      {children}
    </TabList>
  )
}
