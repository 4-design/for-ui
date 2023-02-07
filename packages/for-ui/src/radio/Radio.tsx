import { FC, forwardRef, ReactNode } from 'react';
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import { fsx } from '../system/fsx';
import { Text } from '../text';
import { TextDefaultStyler } from '../system/TextDefaultStyler';

export type RadioProps = Omit<MuiRadioProps, 'ref'> & {
  label?: ReactNode;
  nopadding?: boolean;
  className?: string;
};

const Indicator: FC<{ checked: boolean; disabled: boolean }> = ({ checked, disabled }) => (
  <span
    className={fsx([
      'bg-shade-white-default h-4 w-4 rounded-full transition-[border-width,border-color] duration-100',
      checked ? 'border-6' : 'group-hover:border-secondary-dark-default border-2',
      disabled
        ? `border-shade-medium-disabled`
        : checked
        ? `border-secondary-dark-default`
        : `border-shade-medium-default group-hover:border-2 group-hover:border-secondary-dark-default`,
    ])}
  />
);

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ nopadding, label, value, disabled, className, ...rest }, ref) => (
    <Text as="label" className={fsx(`group inline-flex w-[max-content] flex-row gap-1 items-center`, className)}>
      <MuiRadio
        disableRipple
        value={value}
        disabled={disabled}
        inputRef={ref}
        icon={<Indicator checked={false} disabled={!!disabled} />}
        checkedIcon={<Indicator checked={true} disabled={!!disabled} />}
        classes={{
          root: fsx(`group hover:bg-transparent`, nopadding ? `p-0` : `p-1`),
        }}
        {...rest}
      />
      <TextDefaultStyler
        content={label}
        defaultRenderer={(props) => (
          <Text
            size="r"
            className={fsx(`text-shade-dark-default`, disabled && `text-shade-dark-disabled`)}
            {...props}
          />
        )}
      />
    </Text>
  )
);
