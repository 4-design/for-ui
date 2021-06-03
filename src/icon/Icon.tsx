import React from 'react'
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from '@material-ui/core/IconButton'
import tw, { TwStyle } from 'twin.macro'

export interface IconButtonProps extends MuiIconButtonProps {
  twin?: TwStyle[]
  children?: React.ReactNode
}

export const IconButton: React.VFC<IconButtonProps> = ({
  twin,
  children,
  ...rect
}) => {
  return (
    <MuiIconButton css={[tw`focus:outline-none`, twin]} {...rect}>
      {children}
    </MuiIconButton>
  )
}
