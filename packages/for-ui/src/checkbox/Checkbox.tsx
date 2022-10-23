import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import clsx from 'clsx';
import { Typography } from '../typography';

export type CheckboxProps = MuiCheckboxProps & {
  label?: string;
  nopadding?: boolean;
  // Checbox SVG Font Size
  iconsize?: number | string;
};

const _Checkbox = ({ nopadding = false, iconsize = 28, ...rest }: CheckboxProps) => (
  <MuiCheckbox
    classes={{
      root: clsx(['text-shade-medium-default', nopadding ? 'p-0' : 'p-1']),
      checked: clsx(['text-secondary-dark-default']),
      disabled: clsx(['text-shade-dark-disabled']),
    }}
    sx={{ '& .MuiSvgIcon-root': { fontSize: iconsize } }}
    {...rest}
  />
);

export const Checkbox = ({ label, nopadding = false, ...rest }: CheckboxProps) => {
  return (
    <>
      {label ? (
        <FormControlLabel
          sx={{ margin: '0px' }}
          control={<_Checkbox nopadding={nopadding} {...rest} />}
          label={
            <Typography variant="body1" disabled={rest.disabled} className="text-s ml-2">
              {label}
            </Typography>
          }
        />
      ) : (
        <_Checkbox nopadding={nopadding} {...rest} />
      )}
    </>
  );
};
