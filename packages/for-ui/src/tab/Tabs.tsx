import { FC } from 'react';
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import { tabWrapperStyle } from './style';
import { fsx } from '../system/fsx';

export interface TabsProps extends MuiTabsProps {
  intention?: 'primary' | 'secondary';
}

export const Tabs: FC<TabsProps> = ({ intention = 'primary', className, ...rest }) => (
  <MuiTabs className={fsx(tabWrapperStyle(intention), className)} {...rest} />
);
