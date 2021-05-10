import React, { forwardRef } from 'react'
import tw, { css, TwStyle } from 'twin.macro'
import MuiMenuItem, {
  MenuItemProps as MuiMenuItemProps,
} from '@material-ui/core/MenuItem'

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
            (block px-3 py-3 text-base text-gray-high bg-white whitespace-nowrap
            hover:bg-gray-light)!`}
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
