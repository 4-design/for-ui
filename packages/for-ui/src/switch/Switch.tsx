import { forwardRef } from 'react';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import { fsx } from '../system/fsx';

export type SwitchProps = Omit<FormControlLabelProps, 'control'> & {
  value?: unknown;
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ disabled, checked, ...rest }, ref) => {
  return (
    <FormControlLabel
      classes={{
        root: fsx(['m-0 flex gap-1']),
        label: fsx(['text-r text-shade-dark-default font-sans']),
      }}
      className={fsx([disabled && 'cursor-not-allowed'])}
      inputRef={ref}
      control={
        <div
          className={fsx([
            'flex relative items-center rounded-full p-0.5 w-8 h-5',
            checked && disabled && 'bg-[#AFE2F8]',
            !checked && disabled && 'bg-[#DDE1E3]',
            checked && !disabled && 'bg-[#006FB4]',
            !checked && !disabled && 'bg-[#B3BCC1]',
          ])}
        >
          <input type="checkbox" disabled={disabled} className="absolute z-[1] opacity-0" />
          <span
            className={fsx([
              'bg-[#fff] rounded-full transition-transform transform w-4 h-4',
              checked ? 'translate-x-3' : 'translate-x-0',
            ])}
          />
        </div>
      }
      {...rest}
    />
  );
});
