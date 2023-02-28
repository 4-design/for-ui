import { FC, ReactElement } from 'react';
import MuiTab, { TabProps as MuiTabProps } from '@mui/material/Tab';
import { fsx } from '../system/fsx';

export interface TabProps extends Omit<MuiTabProps, 'disableRipple' | 'icon' | 'iconPosition' | 'selected'> {
  minWidth?: number;
  badge?: ReactElement;
}

export const Tab: FC<TabProps> = ({ minWidth, tabIndex, className, badge, ...rest }) => (
  <MuiTab
    disableRipple
    className={fsx(
      `flex gap-1 text-shade-dark-default hover:bg-shade-white-hover text-r py-1.5 px-4 min-h-min border-transparent border-solid border-y-2 normal-case transition-all duration-100 opacity-100 min-w-min [&:focus-visible]:bg-shade-white-active disabled:text-shade-dark-disabled disabled:cursor-not-allowed`,
      className,
    )}
    tabIndex={tabIndex ?? 0}
    sx={{ minWidth }}
    icon={badge}
    iconPosition="end"
    {...rest}
  />
);
