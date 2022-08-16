import React from 'react'
import clsx from 'clsx'

type Props = {
  height?: number | string
  children: React.ReactNode
}

export const TableScroller: React.FC<Props> = ({ height, children }) => (
  <div
    className={clsx([
      'overflow-y-auto',
      typeof height === 'string' && `h-[${height}]`,
      typeof height === 'number' && `h-[${height}px]`,
    ])}
    // css={[
    //   tw`overflow-y-auto`,
    //   typeof height === 'string' &&
    //     css`
    //       height: ${height};
    //     `,
    //   typeof height === 'number' &&
    //     css`
    //       height: ${height}px;
    //     `,
    //   css`
    //     & table {
    //       > thead {
    //         & th {
    //           position: sticky;
    //           top: 0;
    //           z-index: 999;
    //         }
    //       }
    //     }
    //   `,
    // ]}
  >
    {children}
  </div>
)
