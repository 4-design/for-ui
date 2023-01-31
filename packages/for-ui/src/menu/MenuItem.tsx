import React, { forwardRef } from 'react';
import MuiMenuItem, { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import { fsx } from '../system/fsx';

export type MenuItemProps = MuiMenuItemProps & {
  className?: string;
};

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <MuiMenuItem
      ref={ref}
      classes={{
        root: fsx([
          `bg-shade-white-default text-r text-shade-dark-default hover:bg-shade-white-hover whitespace-nowrap border-solid py-2 pl-6 pr-12 font-sans focus-visible:bg-shade-white-active [&.Mui-focused]:bg-shade-white-active`,
          className,
        ]),
      }}
      {...rest}
    >
      {children}
    </MuiMenuItem>
  );
});
