import { FC } from 'react';
import MuiTabList, { TabListProps as MuiTabListProps } from '@mui/lab/TabList';
import { fsx } from '../system/fsx';
import { tabWrapperStyle } from './style';

export interface TabListProps extends MuiTabListProps {
  noBorder?: boolean;
  reverse?: boolean;
  color?: 'primary' | 'secondary';
}

export const TabList: FC<TabListProps> = ({
  color = 'primary',
  noBorder = false,
  reverse = false,
  className,
  ...rest
}) => <MuiTabList className={fsx(tabWrapperStyle(color, noBorder, reverse), className)} {...rest} />;
