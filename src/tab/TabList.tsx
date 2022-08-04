import React from 'react'
import MuiTabList, { TabListProps as MuiTabListProps } from '@mui/lab/TabList'

export interface TabListProps extends MuiTabListProps {
  noBorder?: boolean
  reverse?: boolean
  color?: 'primary' | 'secondary' | 'shade'
}

// const colorStyle = {
//   primary: tw`bg-primary-dark-default`,
//   secondary: tw`bg-secondary-dark-default`,
//   shade: tw`bg-shade-medium-default`,
// }

export const TabList: React.VFC<TabListProps> = ({
  noBorder = false,
  reverse = false,
  color = 'secondary',
  onChange,
  children,
  ...rest
}) => {
  return (
    <MuiTabList
      onChange={onChange}
      aria-label="lab API tabs example"
      // css={[
      //   css`
      //     &.MuiTabs-root {
      //       ${reverse
      //         ? tw`(border-shade-light-default border-t-2)!`
      //         : tw`(border-shade-light-default border-b-2)!`}
      //     }
      //     & .MuiTabs-indicator {
      //       ${colorStyle[color]}
      //       ${reverse && tw`top-0`}
      //     }
      //   `,
      //   noBorder && tw`border-none!`,
      //   twin,
      // ]}
      {...rest}
    >
      {children}
    </MuiTabList>
  )
}
