import { forwardRef, ReactNode } from 'react';
import MuiSwitch, { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
import { fsx } from '../system/fsx';
import { TextDefaultStyler } from '../system/TextDefaultStyler';
import { Text } from '../text';

export type SwitchProps = Omit<MuiSwitchProps, 'control'> & {
  label?: ReactNode;
  className?: string;
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, checked, disabled, className, ...rest }, ref) => (
    <Text as="label" className={fsx(`group inline-flex w-[max-content] flex-row gap-2 items-center`, className)}>
      <MuiSwitch
        checked={checked}
        disabled={disabled}
        inputRef={ref}
        classes={{
          root: fsx('my-2 mr-2 h-6 w-11 p-0', className),
          track: fsx(
            'bg-primary-dark-default block h-full w-full rounded-xl opacity-100',
            checked && 'bg-secondary-dark-default opacity-100',
            // FIXME: Fix to use checked CSS state (NOT checked variable) and root element instead of track.
            // Otherwise uncontrolled switch does not perform as expected to show active state.
            `[.Mui-checked+&]:bg-secondary-dark-default`,
            disabled && 'bg-primary-dark-disabled opacity-100',
            checked && disabled && 'bg-secondary-dark-disabled opacity-100',
          ),
          thumb: fsx(
            'bg-shade-white-default absolute top-1 left-1 h-4 w-4 rounded-2xl transition-all duration-200 ease-in',
          ),
        }}
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
  ),
);
