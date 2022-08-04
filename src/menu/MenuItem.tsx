import React, { forwardRef } from 'react'
import MuiMenuItem, {
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material/MenuItem'

export type MenuItemProps = MuiMenuItemProps

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  (props, ref) => {
    const { children, ...rest } = props

    return (
      <MuiMenuItem
        ref={ref}
        className="font-sans! pl-6! pr-12! py-2! text-r! text-shade-dark-default! bg-shade-white-default! whitespace-nowrap! border-solid! hover:bg-shade-white-hover!"
        // css={[
        //   css`
        //     ${tw`(font-sans pl-6 pr-12 py-2 text-r
        //     text-shade-dark-default bg-shade-white-default whitespace-nowrap border-solid!
        //     hover:bg-shade-white-hover)!`}
        //   `,
        //   twin,
        // ]}
        {...rest}
      >
        {children}
      </MuiMenuItem>
    )
  }
)
