import React from 'react';
import MuiTabList, { TabListProps as MuiTabListProps } from '@mui/lab/TabList';
import { Box } from '@mui/material';
import { fsx } from '../system/fsx';

export interface TabListProps extends MuiTabListProps {
  noBorder?: boolean;
  reverse?: boolean;
  color?: 'primary' | 'secondary' | 'shade';
}

const colorStyle = {
  primary: fsx`bg-primary-dark-default`,
  secondary: fsx`bg-secondary-dark-default`,
  shade: fsx`bg-shade-medium-default`,
};

export const TabList: React.FC<TabListProps> = (props) => {
  return props.noBorder ? <_TabList {...props}>{props.children}</_TabList> : <BorderedTabList {...props} />;
};

const BorderedTabList: React.FC<TabListProps> = (props) => (
  <Box className="w-full">
    {!props.noBorder && props.reverse && (
      <div className={fsx(['bg-shade-light-default absolute box-border h-[1px] w-full'])} />
    )}

    <_TabList {...props}>{props.children}</_TabList>

    {!props.noBorder && !props.reverse && (
      <div className={fsx(['bg-shade-light-default absolute box-border h-[1px] w-full'])} />
    )}
  </Box>
);

const _TabList: React.FC<TabListProps> = ({ reverse = false, color = 'secondary', onChange, children, ...rest }) => {
  return (
    <MuiTabList
      onChange={onChange}
      aria-label="lab API tabs example"
      classes={{
        indicator: fsx([colorStyle[color], reverse && 'top-0']),
      }}
      {...rest}
    >
      {children}
    </MuiTabList>
  );
};
