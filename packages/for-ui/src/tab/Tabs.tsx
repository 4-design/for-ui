import { FC } from 'react';
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import { tabWrapperStyle } from './style';
import { fsx } from '../system/fsx';

export interface TabsProps extends MuiTabsProps {
  color?: 'primary' | 'secondary';
}

export const Tabs: FC<TabsProps> = ({ color = 'primary', className, ...rest }) => (
  <MuiTabs className={fsx(tabWrapperStyle(color), className)} {...rest} />
);
