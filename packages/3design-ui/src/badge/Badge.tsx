import React, { ReactNode } from 'react'
import { BadgeProps } from '@mui/material/Badge'
import MuiBadge from '@mui/material/Badge'

interface Props extends BadgeProps {
  className?: string
  children: ReactNode
}

export const Badge: React.FC<Props> = ({
  className,
  badgeContent,
  children,
  ...rest
}) => {
  return (
    <MuiBadge
      badgeContent={badgeContent}
      color="primary"
      componentsProps={{
        root: {
          className: `text-shade-dark-default ${className}`,
        },
      }}
      {...rest}
    >
      {children}
    </MuiBadge>
  )
}
