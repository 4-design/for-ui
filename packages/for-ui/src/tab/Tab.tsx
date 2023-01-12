import { FC } from 'react';
import MuiTab, { TabProps as MuiTabProps } from '@mui/material/Tab';
import { fsx } from '../system/fsx';

export interface TabProps extends Omit<MuiTabProps, 'disableRipple'> {
  minWidth?: number;
}

export const Tab: FC<TabProps> = ({ minWidth, ...rest }) => (
  <MuiTab
    disableRipple
    className={fsx(
      `text-shade-medium-default font-bold text-r py-1.5 px-4 min-h-min border-transparent border-solid border-y-2 normal-case transition-all duration-100`
    )}
    sx={{ minWidth }}
    {...rest}
  />
);
