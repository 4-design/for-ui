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
      className={`text-shade-dark-default ${className}`}
      badgeContent={badgeContent}
      color="primary"
      // css={[
      //   css`
      //     ${tw`text-shade-dark-default`}

      //     & .MuiBadge-badge {
      //       ${tw`text-shade-dark-default`}
      //     }
      //   `,
      //   twin,
      // ]}
      // classes={{
      //   root: 'text-secondary-dark-default',
      //   badge: 'text-secondary-dark-default',
      // }}
      // componentsProps={{
      //   root: {
      //     className: 'w-full text-secondary-dark-default',
      //   },
      // }}
      // sx={{
      //   color: 'text-shade-dark-default',
      // }}
      {...rest}
    >
      {children}
    </MuiBadge>
  )
}
