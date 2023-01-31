import React, { forwardRef, ReactNode, Children, isValidElement, cloneElement, ComponentProps } from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup, { FormGroupProps } from '@mui/material/FormGroup';
import { Text } from '../text';
import { fsx } from '../system/fsx';
import { TextDefaultStyler } from '../system/TextDefaultStyler';
import { Switch } from './Switch';

export type SwitchGroupProps = Omit<FormGroupProps, 'defaultValue' | 'defaultChecked'> & {
  name?: string;
  row?: boolean;
  required?: boolean;
  disabled?: boolean;
  label?: ReactNode;
  error?: boolean;
  helperText?: ReactNode;
  className?: string;
  children: ReactNode;
};

export const SwitchGroup = forwardRef<HTMLInputElement, SwitchGroupProps>(
  ({ required, disabled, label, error, row, children, helperText, className, ...rest }, ref) => {
    return (
      <FormControl
        component="fieldset"
        required={required}
        disabled={disabled}
        error={error}
        className={fsx(`flex flex-col gap-2`, className)}
      >
        <TextDefaultStyler
          content={label}
          defaultRenderer={({ children, ...props }) => (
            <Text as="legend" size="s" weight="bold" className={fsx(`text-shade-medium-default contents`)} {...props}>
              {/* due to the CSS bug, legend element cannot be styled if contents not specified. But contents makes difficult to style, so wrap by Text. */}
              <Text>
                {children}
                {required && <Text className={fsx(`text-negative-medium-default`)}>*</Text>}
              </Text>
            </Text>
          )}
        />
        <FormGroup
          row={row}
          className={fsx(`flex flex-wrap gap-x-6 gap-y-1`, row && `flex-row`, className)}
          {...rest}
          ref={ref}
        >
          {
            // Pass ref to children (Radio) if provided to RadioGroup
            Children.map(children, (child) =>
              isValidElement<ComponentProps<typeof Switch>>(child)
                ? cloneElement(child, { ref: ref ? ref : undefined })
                : child
            )
          }
        </FormGroup>
        <TextDefaultStyler
          content={helperText}
          defaultRenderer={(props) => (
            <Text
              size="s"
              weight="regular"
              className={fsx(`text-shade-dark-default`, error && `text-negative-medium-default`)}
              {...props}
            />
          )}
        />
      </FormControl>
    );
  }
);
