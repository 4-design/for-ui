import React, { ReactNode } from 'react'
import { BadgeProps } from '@mui/material/Badge'
import MuiBadge from '@mui/material/Badge'
import tw, { css, TwStyle } from 'twin.macro'

interface Props extends BadgeProps {
  twin?: TwStyle
  children: ReactNode
}

export const Badge: React.VFC<Props> = ({
  twin,
  badgeContent,
  children,
  ...rest
}) => {
  return (
    <MuiBadge
      badgeContent={badgeContent}
      color="primary"
      css={[
        css`
          & .MuiBadge-badge {
            ${tw`bg-primary-main`}
          }
        `,
        twin,
      ]}
      {...rest}
    >
      {children}
    </MuiBadge>
  )
}
