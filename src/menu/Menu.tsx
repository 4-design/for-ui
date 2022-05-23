import React from 'react'
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu'
import tw, { css, TwStyle } from 'twin.macro'

export interface MenuProps extends MuiMenuProps {
  twin?: TwStyle | TwStyle[]
}

export const Menu: React.VFC<MenuProps> = ({
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
}) => {
  return (
    <MuiMenu
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      onClose={onClose}
      css={[
        css`
          & .MuiMenu-paper {
            ${tw`(z-modal py-2 min-w-min rounded-2xl shadow-main transform translate-y-4)!`}
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
