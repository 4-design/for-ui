import { FC } from 'react';
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import { tabWrapperStyle } from './style';

export interface TabsProps extends MuiTabsProps {
  noBorder?: boolean;
  reverse?: boolean;
  color?: 'primary' | 'secondary';
  className?: string;
}

export const Tabs: FC<TabsProps> = ({ color = 'primary', noBorder = false, reverse = false, ...rest }) => (
  <MuiTabs className={tabWrapperStyle(color, noBorder, reverse)} {...rest} />
);
