import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { fsx } from '../system/fsx';
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
      root: fsx(['text-shade-medium-default', nopadding ? 'p-0' : 'p-1']),
      checked: fsx(['text-secondary-dark-default']),
      disabled: fsx(['text-shade-dark-disabled']),
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
          className="gap-1"
          sx={{ margin: '0px' }}
          control={<_Checkbox nopadding={nopadding} {...rest} />}
          label={
            <Typography variant="body1" disabled={rest.disabled} className="text-r">
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
