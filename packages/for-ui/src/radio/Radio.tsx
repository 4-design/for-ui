import { FC, Fragment, memo, forwardRef } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import { fsx } from '../system/fsx';

export interface RadioProps extends MuiRadioProps {
  label?: string;
  error?: string;
  nopadding?: boolean;
  className?: string;
}

const Indicator: FC<{ checked: boolean; disabled: boolean }> = ({ checked, disabled }) => (
  <span
    className={fsx([
      'bg-shade-white-default h-4 w-4 rounded-full transition-[border-width] duration-100',
      checked ? 'border-6' : 'group-hover:border-secondary-dark-default border-2',
      disabled
        ? 'border-shade-medium-disabled'
        : checked
        ? 'border-secondary-dark-default'
        : 'border-shade-medium-default',
    ])}
  />
);

const _Radio: FC<RadioProps> = memo(({ nopadding, disabled, ref, ...rest }) => (
  <MuiRadio
    disableRipple
    icon={<Indicator checked={false} disabled={!!disabled} />}
    checkedIcon={<Indicator checked={true} disabled={!!disabled} />}
    disabled={disabled}
    classes={{
      root: fsx(['group hover:bg-transparent', nopadding ? 'p-0' : 'p-1']),
    }}
    inputRef={ref}
    {...rest}
  />
));

export const Radio: FC<RadioProps> = forwardRef(({ label, value, disabled, className, ...rest }, ref) => {
  return (
    <Fragment>
      {label ? (
        <FormControlLabel
          disabled={disabled}
          value={value}
          label={label}
          control={<_Radio value={value} disabled={disabled} ref={ref} {...rest} />}
          ref={ref}
          classes={{
            root: fsx(['group m-0 flex gap-1', className]),
            label: fsx(['text-r text-shade-dark-default font-sans']),
            disabled: fsx(['text-shade-dark-disabled']),
          }}
        />
      ) : (
        <_Radio value={value} disabled={disabled} ref={ref} {...rest} />
      )}
    </Fragment>
  );
});
