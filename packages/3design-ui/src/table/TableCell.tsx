import React from 'react';
import { PropsWithChildren } from 'react';
import clsx from 'clsx';

export type TableCellProps = PropsWithChildren<{
  component?: 'th' | 'td';
  className?: string;
}>;

export const TableCell = ({ component = 'td', className, children, ...rest }: TableCellProps) => {
  return (
    <>
      {component === 'td' ? (
        <td
          className={clsx([
            'border-b border-shade-light-default p-3 text-left font-normal text-shade-dark-default',
            className,
          ])}
          {...rest}
        >
          {children}
        </td>
      ) : (
        <th
          className={clsx([
            'border-b border-shade-light-default p-3 text-left font-normal text-shade-dark-default',
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
