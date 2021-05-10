import React from 'react'
import tw, { css, TwStyle } from 'twin.macro'
import MuiTab, { TabProps as MuiTabProps } from '@material-ui/core/Tab'
import { SerializedStyles } from '@emotion/react'

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
              ${tw`text-accent!`}
            }
          }

          > .MuiTab-wrapper {
            ${tw`text-middle!`}
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
