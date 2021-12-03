import React, { forwardRef } from 'react'
import MuiMenuItem, {
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material/MenuItem'
import tw, { css, TwStyle } from 'twin.macro'

export interface MenuItemProps extends MuiMenuItemProps {
  twin?: TwStyle[]
}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  (props, _) => {
    const { twin, children, ...rest } = props

    return (
      <MuiMenuItem
        css={[
          css`
            ${tw`
            (block px-3 py-3 text-base text-shade-dark-default bg-shade-white-default whitespace-nowrap
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
