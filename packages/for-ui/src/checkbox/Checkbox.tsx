import { FC, forwardRef, ReactNode } from 'react';
import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import { fsx } from '../system/fsx';
import { Text } from '../text';
import { MdCheck, MdRemove } from 'react-icons/md';
import { TextDefaultStyler } from '../system/TextDefaultStyler';

export type CheckboxProps = MuiCheckboxProps & {
  label?: ReactNode;
  nopadding?: boolean;
  className?: string;
};

const Indicator: FC<{ state: 'default' | 'checked' | 'intermediate' }> = ({ state }) => (
  <span
    className={fsx([
      `h-4 w-4 rounded transition duration-100`,
      state === 'default' && `border-shade-medium-default border-2`,
      (state === 'checked' || state === 'intermediate') && `bg-primary-dark-default`,
    ])}
  >
    {
      {
        default: null,
        checked: <MdCheck size={16} className="fill-shade-white-default" />,
        intermediate: <MdRemove size={16} className="fill-shade-white-default" />,
      }[state]
    }
  </span>
);

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, nopadding = false, disabled, className, ...rest }, ref) => (
    <Text as="label" className={fsx(`group inline-flex w-[max-content] flex-row gap-1 items-center`, className)}>
      <MuiCheckbox
        icon={<Indicator state="default" />}
        checkedIcon={<Indicator state="checked" />}
        indeterminateIcon={<Indicator state="intermediate" />}
        disabled={disabled}
        className={fsx(nopadding ? 'p-0' : 'p-1')}
        inputRef={ref}
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
