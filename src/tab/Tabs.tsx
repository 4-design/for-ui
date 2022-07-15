import React from 'react'
import { SerializedStyles } from '@emotion/react'
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs'
import tw, { css, TwStyle } from 'twin.macro'

export interface TabsProps extends MuiTabsProps {
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
  value,
  onChange,
  children,
  ...rest
}) => {
  return (
    <MuiTabs
      value={value}
      onChange={onChange}
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
    </MuiTabs>
  )
}
