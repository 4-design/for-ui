import React from 'react';
import { PropsWithChildren } from 'react';
import { fsx } from '../system/fsx';

export type TableCellProps = PropsWithChildren<{
  component?: 'th' | 'td';
  className?: string;
}>;

export const TableCell = ({ component = 'td', className, children, ...rest }: TableCellProps) => {
  return (
    <>
      {component === 'td' ? (
        <td
          className={fsx([
            'border-shade-light-default text-shade-dark-default text-r border-b px-3 py-2 text-left font-normal',
            className,
          ])}
          {...rest}
        >
          {children}
        </td>
      ) : (
        <th
          className={fsx([
            'border-shade-light-default text-shade-dark-default text-r border-b px-3 py-2 text-left font-normal',
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
