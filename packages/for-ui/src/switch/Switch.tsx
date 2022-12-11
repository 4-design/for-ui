import React from 'react';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import MuiSwitch from '@mui/material/Switch';
import { fsx } from '../system/fsx';

export type SwitchProps = Omit<FormControlLabelProps, 'control'> & {
  value?: unknown;
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
            root: fsx('p-0 flex m-0 w-auto h-auto'),
            track: fsx([
              'bg-primary-dark-default block h-full w-full rounded-xl opacity-100 h-5 w-8',
              checked && 'bg-secondary-dark-default opacity-100',
              disabled && 'bg-primary-dark-disabled opacity-100',
              checked && disabled && 'bg-secondary-dark-disabled opacity-100',
            ]),
            thumb: fsx(['bg-shade-white-default h-4 w-4 rounded-2xl shadow-none']),
            switchBase: fsx(['m-0.5 p-0 transition-all duration-100 ease-in-out']),
            checked: fsx(['transform-none pl-3']),
          }}
        />
      }
      {...rest}
    />
  );
};
