import React from 'react';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import MuiSwitch from '@mui/material/Switch';
import { fsx } from '../system/fsx';

export type SwitchProps = Omit<FormControlLabelProps, 'control'> & {
  value?: unknown;
  disable?: boolean;
};

export const Switch: React.FC<SwitchProps> = ({ value, checked, disabled, ...rest }) => {
  return (
    <FormControlLabel
      control={
        <MuiSwitch
          value={value}
          checked={checked}
          disabled={disabled}
          // toggleの可動域を狭めるために、trackのサイズを変更する
          classes={{
            root: fsx(['my-2 mr-2 h-5 w-8 p-0.5']),
            track: fsx([
              'bg-primary-dark-default block h-full w-full rounded-xl opacity-100',
              checked && 'bg-secondary-dark-default opacity-100',
              disabled && 'bg-primary-dark-disabled opacity-100',
              checked && disabled && 'bg-secondary-dark-disabled opacity-100',
            ]),
            thumb: fsx([
              'bg-shade-white-default absolute top-1 left-1 h-3 w-3 rounded-2xl transition-all duration-200 ease-in-out',
              checked && 'transform -translate-x-2 ease-in-out',
            ]),
            input: fsx(['w-8 h-5']),
          }}
        />
      }
      {...rest}
    />
  );
};
