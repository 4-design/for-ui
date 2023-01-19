import { FC, forwardRef, ReactNode } from 'react';
import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { fsx } from '../system/fsx';
import { Text } from '../text';
import { MdCheck, MdRemove } from 'react-icons/md';

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

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ label, nopadding = false, disabled, className, ...rest }, ref) => (
    <FormControlLabel
      control={
        <MuiCheckbox
          icon={<Indicator state="default" />}
          checkedIcon={<Indicator state="checked" />}
          indeterminateIcon={<Indicator state="intermediate" />}
          className={fsx(nopadding ? 'p-0' : 'p-1')}
          ref={ref}
          {...rest}
        />
      }
      label={
        label && (
          <Text as="label" size="r" className={fsx(`text-shade-dark-default`, disabled && `text-shade-dark-disabled`)}>
            {label}
          </Text>
        )
      }
      ref={ref}
      className={fsx(`m-0 inline-flex gap-1`, className)}
    />
  )
);
