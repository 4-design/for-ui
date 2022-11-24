import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { fsx } from '../system/fsx';
import { Text } from '../text';

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

export const Checkbox = ({ label, nopadding = false, disabled, ...rest }: CheckboxProps) => {
  return (
    <>
      {label ? (
        <FormControlLabel
          sx={{ margin: '0px' }}
          control={<_Checkbox nopadding={nopadding} {...rest} />}
          label={
            <Text size="s" className={fsx(`text-shade-dark-default ml-2`, disabled && `text-shade-dark-disabled`)}>
              {label}
            </Text>
          }
        />
      ) : (
        <_Checkbox nopadding={nopadding} {...rest} />
      )}
    </>
  );
};
