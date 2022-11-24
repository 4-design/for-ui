import React from 'react';
import MuiTab, { TabProps as MuiTabProps } from '@mui/material/Tab';
import { fsx } from '../system/fsx';

export interface TabProps extends MuiTabProps {
  minWidth?: number;
}

export const Tab: React.VFC<TabProps> = ({ minWidth = 160, disabled, tabIndex, ...rest }) => {
  return (
    <MuiTab
      classes={{
        root: fsx([
          `min-w-[${minWidth}] text-r text-primary-medium-default min-h-[auto] pt-2 pb-2.5 font-sans font-bold`,
        ]),
        textColorPrimary: fsx(['focus:outline-none']),
        selected: fsx(['text-primary-dark-default focus:outline-none']),
        wrapped: fsx(['focus:outline-none']),
      }}
      disabled={disabled}
      tabIndex={tabIndex}
      {...rest}
    />
  );
};
