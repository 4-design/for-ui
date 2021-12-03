import React from 'react'
import { SerializedStyles } from '@emotion/react'
import MuiTab, { TabProps as MuiTabProps } from '@mui/material/Tab'
import tw, { css, TwStyle } from 'twin.macro'

export interface TabProps extends MuiTabProps {
  minWidth?: number
  twin?: (TwStyle | SerializedStyles)[]
}

export const Tab: React.VFC<TabProps> = ({
  twin,
  minWidth = 160,
  disabled,
  tabIndex,
  ...rest
}) => {
  return (
    <MuiTab
      css={[
        css`
          &.MuiTab-root {
            min-width: ${minWidth}px !important;
          }

          &.MuiTab-textColorPrimary {
            ${tw`focus:outline-none!`}
          }

          &.Mui-selected {
            ${tw`focus:outline-none!`}

            > .MuiTab-wrapper {
              ${tw`text-primary-dark-default!`}
            }
          }

          > .MuiTab-wrapper {
            ${tw`text-shade-medium-default!`}
          }
        `,
        twin,
      ]}
      disabled={disabled}
      tabIndex={tabIndex}
      {...rest}
    />
  )
}
