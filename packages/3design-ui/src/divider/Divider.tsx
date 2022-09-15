import React from 'react'
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from '@mui/material/Divider'

export type DividerProps = MuiDividerProps & {
  className?: string
}

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <MuiDivider
      light
      classes={{
        root: `border border-shade-medium-default ${className}`,
      }}
    />
  )
}
