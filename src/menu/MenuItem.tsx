import React, { forwardRef } from 'react'
import MuiMenuItem, {
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material/MenuItem'
import clsx from 'clsx'

export type MenuItemProps = MuiMenuItemProps

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  (props, ref) => {
    const { children, ...rest } = props

    return (
      <MuiMenuItem
        ref={ref}
        classes={{
          root: clsx([
            'whitespace-nowrap border-solid bg-shade-white-default py-2 pl-6 pr-12 font-sans text-r text-shade-dark-default hover:bg-shade-white-hover',
          ]),
        }}
        {...rest}
      >
        {children}
      </MuiMenuItem>
    )
  }
)
