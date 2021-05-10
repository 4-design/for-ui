import React from 'react'
import tw, { TwStyle } from 'twin.macro'
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from '@material-ui/core/IconButton'

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
