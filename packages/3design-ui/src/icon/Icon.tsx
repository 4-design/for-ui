import React from 'react';
import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';

export type IconButtonProps = MuiIconButtonProps & {
  className?: string;
  children?: React.ReactNode;
};

export const IconButton: React.VFC<IconButtonProps> = ({ className, children, ...rect }) => {
  return (
    <MuiIconButton className={`focus:outline-none ${className}`} {...rect}>
      {children}
    </MuiIconButton>
  );
};
