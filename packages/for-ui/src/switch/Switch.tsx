import { forwardRef } from 'react';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import { fsx } from '../system/fsx';

export type SwitchProps<Value = unknown> = Omit<FormControlLabelProps, 'control'> & {
  value?: Value;
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => (
  <FormControlLabel
    classes={{
      root: fsx(['m-0 flex gap-1']),
      label: fsx(['text-r text-shade-dark-default font-sans']),
    }}
    control={
      <input
        type="checkbox"
        ref={ref}
        className={fsx([
          `appearance-none bg-shade-medium-default rounded-full h-5 w-8 p-0.5 transition-all duration-100 cursor-pointer`,
          `before:content-[''] before:block before:h-4 before:w-4 before:bg-shade-white-default before:rounded-full`,
          `checked:bg-primary-dark-default checked:pl-3.5`,
          `disabled:cursor-not-allowed disabled:bg-shade-medium-disabled`,
          `disabled:checked:bg-primary-dark-disabled`,
        ])}
      />
    }
    {...props}
  />
));
