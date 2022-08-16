import React from 'react'
import clsx from 'clsx'
import { TableCellProps as ReactTableCellProps } from 'react-table'

export interface TableCellProps extends ReactTableCellProps {
  children: React.ReactNode

  component?: 'th' | 'td'
  className?: string
}

export const TableCell: React.VFC<TableCellProps> = ({
  component = 'td',
  className,
  children,
  ...rest
}) => {
  return (
    <>
      {component === 'td' ? (
        <td
          className={clsx([
            'p-3 text-left font-normal text-shade-dark-default',
            className,
          ])}
          {...rest}
        >
          {children}
        </td>
      ) : (
        <th
          className={clsx([
            'p-3 text-left font-normal text-shade-dark-default',
            className,
          ])}
          {...rest}
        >
          {children}
        </th>
      )}
    </>
  )
}
