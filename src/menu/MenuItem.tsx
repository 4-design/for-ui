import React, { forwardRef } from 'react'
import MuiMenuItem, {
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material/MenuItem'
import tw, { css, TwStyle } from 'twin.macro'

export interface MenuItemProps extends MuiMenuItemProps {
  twin?: TwStyle[]
}

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  (props, ref) => {
    const { twin, children, ...rest } = props

    return (
      <MuiMenuItem
        ref={ref}
        css={[
          css`
            ${tw`(font-sans pl-6 pr-12 py-2 text-r
            text-shade-dark-default bg-shade-white-default whitespace-nowrap
            hover:bg-shade-white-hover)!`}
          `,
          twin,
        ]}
        {...rest}
      >
        {children}
      </MuiMenuItem>
    )
  }
)
