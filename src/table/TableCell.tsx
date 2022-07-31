import React from 'react'
import { TableCellProps as ReactTableCellProps } from 'react-table'
import tw, { TwStyle } from 'twin.macro'

export interface TableCellProps extends ReactTableCellProps {
  children: React.ReactNode

  component?: 'th' | 'td'

  twin?: TwStyle | TwStyle[]
}

export const TableCell: React.VFC<TableCellProps> = ({
  component = 'td',
  twin,
  children,
  ...rest
}) => {
  return (
    <>
      {component === 'td' ? (
        <td
          css={[tw`p-3 font-normal text-left text-shade-dark-default`, twin]}
          {...rest}
        >
          {children}
        </td>
      ) : (
        <th
          css={[tw`p-3 font-normal text-left text-shade-dark-default`, twin]}
          {...rest}
        >
          {children}
        </th>
      )}
    </>
  )
}
