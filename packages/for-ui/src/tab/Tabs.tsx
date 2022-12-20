import React from 'react';
import { Box } from '@mui/material';
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import { fsx } from '../system/fsx';

export interface TabsProps extends MuiTabsProps {
  noBorder?: boolean;
  reverse?: boolean;
  color?: 'primary' | 'secondary';
  className?: string;
}

const colorStyle = {
  primary: fsx`bg-primary-dark-default`,
  secondary: fsx`bg-secondary-dark-default`,
};

export const Tabs: React.FC<TabsProps> = (props) => {
  return props.noBorder ? <_Tabs {...props}>{props.children}</_Tabs> : <BorderedTabs {...props} />;
};

const BorderedTabs: React.FC<TabsProps> = (props) => (
  <Box className="w-full">
    {!props.noBorder && props.reverse && (
      <div className={fsx(['border-shade-light-default absolute box-border h-0 w-full border-b-[1px] border-solid'])} />
    )}

    <_Tabs {...props}>{props.children}</_Tabs>

    {!props.noBorder && !props.reverse && (
      <div className={fsx(['border-shade-light-default absolute box-border h-0 w-full border-b-[1px] border-solid'])} />
    )}
  </Box>
);

const _Tabs: React.FC<TabsProps> = ({ reverse = false, color = 'secondary', value, onChange, children, className, ...rest }) => {
  return (
    <MuiTabs
      value={value}
      onChange={onChange}
      classes={{
        root: fsx('min-h-[auto]', className),
        indicator: fsx(colorStyle[color], reverse && 'top-0'),
      }}
      {...rest}
    >
      {children}
    </MuiTabs>
  );
};
