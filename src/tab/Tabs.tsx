import React from 'react'
import { SerializedStyles } from '@emotion/react'
import TabList, { TabListProps } from '@mui/lab/TabList'
import tw, { css, TwStyle } from 'twin.macro'

export interface TabsProps extends TabListProps {
  noBorder?: boolean
  reverse?: boolean
  color?: 'primary' | 'secondary' | 'shade'
  twin?: (TwStyle | SerializedStyles)[]
}

const colorStyle = {
  primary: tw`bg-primary-dark-default`,
  secondary: tw`bg-secondary-dark-default`,
  shade: tw`bg-shade-medium-default`,
}

export const Tabs: React.VFC<TabsProps> = ({
  twin,
  noBorder = false,
  reverse = false,
  color = 'secondary',
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
              ? tw`(border-shade-light-default border-t-2)!`
              : tw`(border-shade-light-default border-b-2)!`}
          }
          & .MuiTabs-indicator {
            ${colorStyle[color]}
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
