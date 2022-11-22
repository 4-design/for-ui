import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MuiRadioGroup, { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';
import { fsx } from '../system/fsx';

export interface RadioGroupProps extends MuiRadioGroupProps {
  children: React.ReactNode;
  required?: boolean;
  label?: string;
  error?: string;
  className?: string;
}

export const RadioGroup: React.VFC<RadioGroupProps> = ({
  className,
  name,
  label,
  defaultValue,
  row = true,
  error,
  children,
  onChange,
  required = false,
}) => {
  return (
    <FormControl component="fieldset" error={!!error}>
      {label && (
        <label className="text-s text-shade-medium-default mb-2 font-sans">
          {label}
          {required && <span className="text-negative-medium-default">*</span>}
        </label>
      )}
      <MuiRadioGroup
        row={row}
        name={name}
        defaultValue={defaultValue}
        classes={{
          error: fsx(['text-negative-medium-default m-0 mt-1']),
        }}
        className={fsx([`flex gap-x-6 gap-y-2`, className])}
        onChange={onChange}
      >
        {children}
      </MuiRadioGroup>
      {error && (
        <FormHelperText
          classes={{
            root: fsx(['text-negative-medium-default']),
            error: fsx(['text-negative-medium-default m-0 mt-1']),
          }}
        >
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
};
