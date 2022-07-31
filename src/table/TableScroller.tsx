import React from 'react'
import tw, { css } from 'twin.macro'

type Props = {
  height?: number | string
  children: React.ReactNode
}

export const TableScroller: React.FC<Props> = ({ height, children }) => (
  <div
    css={[
      tw`overflow-y-auto`,
      typeof height === 'string' &&
        css`
          height: ${height};
        `,
      typeof height === 'number' &&
        css`
          height: ${height}px;
        `,
      css`
        & table {
          > thead {
            & th {
              position: sticky;
              top: 0;
              z-index: 999;
            }
          }
        }
      `,
    ]}
  >
    {children}
  </div>
)
