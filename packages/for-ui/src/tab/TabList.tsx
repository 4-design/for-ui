import { FC } from 'react';
import MuiTabList, { TabListProps as MuiTabListProps } from '@mui/lab/TabList';
import { tabWrapperStyle } from './style';
import { fsx } from '../system/fsx';

export interface TabListProps extends MuiTabListProps {
  noBorder?: boolean;
  reverse?: boolean;
  color?: 'primary' | 'secondary';
}

export const TabList: FC<TabListProps> = ({ color = 'primary', className, ...rest }) => (
  <MuiTabList className={fsx(tabWrapperStyle(color), className)} {...rest} />
);
