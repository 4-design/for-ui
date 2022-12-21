import { FC, forwardRef } from 'react';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';

import MuiSwitch, { useSwitch, UseSwitchParameters } from '@mui/base/SwitchUnstyled';
import { fsx } from '../system/fsx';

export type SwitchProps = Omit<FormControlLabelProps, 'control'> &
  UseSwitchParameters & {
    value?: string;
    className?: string;
    label?: string;
  };

const _Switch = forwardRef<HTMLInputElement, SwitchProps>(({ label, className, ...switchProps }, ref) => {
  const { getInputProps, checked, disabled } = useSwitch(switchProps);
  const t = getInputProps()
  return (
    <MuiSwitch
      slotProps={{
        root: {
          className: fsx([
            `p-0.5 flex m-0 w-auto h-auto transition-all duration-100 bg-shade-medium-default block h-full w-full rounded-xl h-5 w-8`,
            // `relative`,
            checked && `pl-3.5 bg-primary-dark-default`,
            disabled && `bg-primary-dark-disabled`,
            checked && disabled && `bg-shade-medium-disabled`,
            className,
          ]),
        },
        thumb: {
          className: fsx([`block bg-shade-white-default h-4 w-4 rounded-2xl`, disabled && `shadow-none`]),
        },
        input: {
          className: fsx([
            `opacity-0`,
            // `absolute w-full h-full top-0 left-0`,
          ]),
          'aria-label': label,
          ...t,
          ref,
          // onChange: (e) => { t.onChange(e); console.log(e.target.checked) }
        },
      }}
      ref={ref}
    />
  );
});

export const __Switch = forwardRef<HTMLInputElement, SwitchProps>(({ label, className, ...switchProps }, ref) => {
  return (
    <FormControlLabel
      classes={{
        root: fsx(['m-0 flex gap-1']),
        label: fsx(['text-r text-shade-dark-default font-sans']),
      }}
      className={className}
      control={<_Switch label={label} className={className} {...switchProps} ref={ref} />}
      label={label}
      // {...rest}
    />
  );
});

export const Switch = forwardRef((props, ref) => (
  <FormControlUnstyled>
    <_Switch {...props}  ref={ref} />
  </FormControlUnstyled>
))
