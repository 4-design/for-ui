import React from 'react'
import MuiTab, { TabProps as MuiTabProps } from '@mui/material/Tab'
import clsx from 'clsx'

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
      classes={{
        // eslint-disable-next-line tailwindcss/no-custom-classname
        root: clsx([`min-w-[${minWidth}] text-primary-medium-default`]),
        textColorPrimary: clsx(['focus:outline-none']),
        selected: clsx(['text-primary-dark-default focus:outline-none']),
        wrapped: clsx(['focus:outline-none']),
      }}
      disabled={disabled}
      tabIndex={tabIndex}
      {...rest}
    />
  )
}
