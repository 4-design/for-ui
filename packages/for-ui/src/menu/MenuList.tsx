import { forwardRef } from 'react';
import MuiMenuList, { MenuListProps } from '@mui/material/MenuList';
import { fsx } from '../system/fsx';

export const MenuList = forwardRef<HTMLUListElement, MenuListProps>(({ className, ...rest }, ref) => (
  <MuiMenuList
    ref={ref}
    className={fsx(
      `z-modal shadow-menu w-full rounded p-1 divide-shade-light-default grid grid-cols-1 divide-y`,
      className
    )}
    {...rest}
  />
));
