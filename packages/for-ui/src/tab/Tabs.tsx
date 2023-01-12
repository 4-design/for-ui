import { FC } from 'react';
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import { tabWrapperStyle } from './style';
import { fsx } from '../system/fsx'

export interface TabsProps extends MuiTabsProps {
  noBorder?: boolean;
  reverse?: boolean;
  color?: 'primary' | 'secondary';
}

export const Tabs: FC<TabsProps> = ({ color = 'primary', noBorder = false, reverse = false, className, ...rest }) => (
  <MuiTabs className={fsx(tabWrapperStyle(color, noBorder, reverse), className)} {...rest} />
);
