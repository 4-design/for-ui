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
      `bg-shade-white-default h-5 w-5 rounded-full transition-[border-width] duration-100`,
      checked ? `border-7` : `border-2`,
      disabled
        ? `border-shade-medium-disabled`
        : checked
        ? `border-secondary-dark-default`
        : `border-shade-medium-default group-hover:border-3 group-hover:border-secondary-dark-default`,
    ])}
  />
);

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ nopadding, label, value, disabled, className, ...rest }, ref) => (
    <Text as="label" className={fsx(`group inline-flex w-[max-content] flex-row gap-2 items-center`, className)}>
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
            size="s"
            className={fsx(`text-shade-dark-default`, disabled && `text-shade-dark-disabled`)}
            {...props}
          />
        )}
      />
    </Text>
  )
);
