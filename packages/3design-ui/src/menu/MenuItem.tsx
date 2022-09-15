import React, { forwardRef } from 'react';
import MuiMenuItem, { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import clsx from 'clsx';

export type MenuItemProps = MuiMenuItemProps & {
  className?: string;
};

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <MuiMenuItem
      ref={ref}
      classes={{
        root: clsx([
          'bg-shade-white-default text-r text-shade-dark-default hover:bg-shade-white-hover whitespace-nowrap border-solid py-2 pl-6 pr-12 font-sans',
          className,
        ]),
      }}
      {...rest}
    >
      {children}
    </MuiMenuItem>
  );
});
