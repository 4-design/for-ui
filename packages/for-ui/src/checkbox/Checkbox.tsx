import { forwardRef, ReactNode } from 'react';
import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import { fsx } from '../system/fsx';
import { Text } from '../text';
import { TextDefaultStyler } from '../system/TextDefaultStyler';

export type CheckboxProps = MuiCheckboxProps & {
  label?: ReactNode;
  nopadding?: boolean;
  // Checbox SVG Font Size
  iconsize?: number | string;
  className?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, iconsize, nopadding = false, disabled, className, ...rest }, ref) => (
    <Text as="label" className={fsx(`group inline-flex w-[max-content] flex-row gap-2 items-center`, className)}>
      <MuiCheckbox
        classes={{
          root: fsx('text-shade-medium-default', nopadding ? 'p-0' : 'p-1'),
          checked: fsx('text-secondary-dark-default'),
          disabled: fsx('text-shade-dark-disabled'),
        }}
        disabled={disabled}
        sx={{ '& .MuiSvgIcon-root': { fontSize: iconsize } }}
        inputRef={ref}
        {...rest}
      />
      <TextDefaultStyler
        content={label}
        defaultRenderer={(props) => (
          <Text
            size="s"
            className={fsx(`text-shade-dark-default`, disabled && `text-shade-dark-disabled`)}
            {...props}
          />
        )}
      />
    </Text>
  )
);
