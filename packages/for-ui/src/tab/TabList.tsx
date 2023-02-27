import { FC } from 'react';
import MuiTabList, { TabListProps as MuiTabListProps } from '@mui/lab/TabList';
import { tabWrapperStyle } from './style';
import { fsx } from '../system/fsx';

export interface TabListProps extends MuiTabListProps {
  noBorder?: boolean;
  reverse?: boolean;
  intention?: 'primary' | 'secondary';
}

export const TabList: FC<TabListProps> = ({ intention = 'primary', className, ...rest }) => (
  <MuiTabList className={fsx(tabWrapperStyle(intention), className)} {...rest} />
);
