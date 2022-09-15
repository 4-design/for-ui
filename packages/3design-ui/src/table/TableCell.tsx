import React from 'react';
import clsx from 'clsx';
import { TableCellProps as ReactTableCellProps } from 'react-table';

export interface TableCellProps extends ReactTableCellProps {
  children: React.ReactNode;

  component?: 'th' | 'td';
  className?: string;
}

export const TableCell: React.VFC<TableCellProps> = ({ component = 'td', className, children, ...rest }) => {
  return (
    <>
      {component === 'td' ? (
        <td
          className={clsx([
            'border-shade-light-default text-shade-dark-default border-b p-3 text-left font-normal',
            className,
          ])}
          {...rest}
        >
          {children}
        </td>
      ) : (
        <th
          className={clsx([
            'border-shade-light-default text-shade-dark-default border-b p-3 text-left font-normal',
            className,
          ])}
          {...rest}
        >
          {children}
        </th>
      )}
    </>
  );
};
