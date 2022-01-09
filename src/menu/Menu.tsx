import React, { forwardRef } from 'react'
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu'
import tw, { css, TwStyle } from 'twin.macro'

export interface MenuProps extends MuiMenuProps {
  twin?: TwStyle | TwStyle[]
}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      twin,
      open,
      anchorEl,
      anchorOrigin = {
        vertical: 'bottom',
        horizontal: 'right',
      },
      transformOrigin = {
        vertical: 'top',
        horizontal: 'right',
      },
      onClose,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <MuiMenu
        ref={ref}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        onClose={onClose}
        css={[
          css`
            & .MuiMenu-paper {
              ${tw`(z-modal py-1 min-w-min rounded-[4px] shadow-menu transform translate-y-2)!`}

              & .MuiList-root {
                ${tw`(grid grid-cols-1 divide-y divide-shade-light-default)!`}
              }
            }

            & .MuiMenu-list {
              ${tw`divide-y! divide-shade-light-default!`}
            }

            & .MuiList-padding {
              ${tw`py-0`}
            }
          `,
          twin,
        ]}
        {...rest}
      >
        {children}
      </MuiMenu>
    )
  }
)
