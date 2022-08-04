import React from 'react'
import MuiTab, { TabProps as MuiTabProps } from '@mui/material/Tab'

export interface TabProps extends MuiTabProps {
  minWidth?: number
}

export const Tab: React.VFC<TabProps> = ({
  minWidth = 160,
  disabled,
  tabIndex,
  ...rest
}) => {
  return (
    <MuiTab
      // css={[
      //   css`
      //     ${tw`text-primary-medium-default`}

      //     &.MuiTab-root {
      //       min-width: ${minWidth}px !important;
      //     }

      //     &.MuiTab-textColorPrimary {
      //       ${tw`focus:outline-none!`}
      //     }

      //     &.Mui-selected {
      //       ${tw`(focus:outline-none text-primary-dark-default)!`}

      //       > .MuiTab-wrapper {
      //         ${tw`text-primary-dark-default!`}
      //       }
      //     }

      //     > .MuiTab-wrapper {
      //       ${tw`text-shade-medium-default!`}
      //     }
      //   `,
      //   twin,
      // ]}
      disabled={disabled}
      tabIndex={tabIndex}
      {...rest}
    />
  )
}
