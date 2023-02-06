import { forwardRef } from 'react';
import MuiMenuList, { MenuListProps } from '@mui/material/MenuList';
import { fsx } from '../system/fsx';
import { style } from './style';

export const MenuList = forwardRef<HTMLUListElement, MenuListProps>(({ className, ...rest }, ref) => (
  <MuiMenuList ref={ref} className={fsx(style, className)} {...rest} />
));
