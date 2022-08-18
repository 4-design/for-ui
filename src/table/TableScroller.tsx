import React from 'react'
import clsx from 'clsx'

type Props = {
  height?: number | string
  children: React.ReactNode
}

export const TableScroller: React.FC<Props> = ({ height, children }) => (
  <div
    style={{
      height:
        typeof height === 'string'
          ? height
          : typeof height === 'number'
          ? `${height}px`
          : 'auto',
    }}
    className={clsx([
      `overflow-y-auto`,
      '[&_table>thead_th]:sticky [&_table>thead_th]:top-0 [&_table>thead_th]:z-table',
    ])}
  >
    {children}
  </div>
)
