import React, { ReactNode } from 'react'
import tw, { css, TwStyle } from 'twin.macro'
import MuiBadge from '@material-ui/core/Badge'
import { BadgeProps } from '@material-ui/core/Badge'

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
