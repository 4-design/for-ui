import React from 'react'
import { Box } from '@mui/material'
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs'
import clsx from 'clsx'

export interface TabsProps extends MuiTabsProps {
  noBorder?: boolean
  reverse?: boolean
  color?: 'primary' | 'secondary' | 'shade'
}

const colorStyle = {
  primary: clsx`bg-primary-dark-default`,
  secondary: clsx`bg-secondary-dark-default`,
  shade: clsx`bg-shade-medium-default`,
}

export const Tabs: React.FC<TabsProps> = (props) => {
  return props.noBorder ? (
    <_Tabs {...props}>{props.children}</_Tabs>
  ) : (
    <BorderedTabs {...props} />
  )
}

const BorderedTabs: React.FC<TabsProps> = (props) => (
  <Box className="w-full">
    {!props.noBorder && props.reverse && (
      <div
        className={clsx([
          'absolute box-border h-[1px] w-full bg-shade-light-default',
        ])}
      />
    )}

    <_Tabs {...props}>{props.children}</_Tabs>

    {!props.noBorder && !props.reverse && (
      <div
        className={clsx([
          'absolute box-border h-[1px] w-full bg-shade-light-default',
        ])}
      />
    )}
  </Box>
)

const _Tabs: React.FC<TabsProps> = ({
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
      classes={{
        indicator: clsx([colorStyle[color], reverse && 'top-0']),
      }}
      {...rest}
    >
      {children}
    </MuiTabs>
  )
}
