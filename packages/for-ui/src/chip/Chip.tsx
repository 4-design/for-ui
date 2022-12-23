import { FC } from 'react';
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip';
import { fsx } from '../system/fsx';

type ChipColorType = 'default' | 'negative' | 'white';

export type ChipProps = Omit<MuiChipProps, 'color' | 'icon' | 'deleteIcon' | 'size'> & {
  color?: ChipColorType;
  className?: string;
} & (
    | {
        leadingIcon: MuiChipProps['icon'];
        trailingIcon?: never;
      }
    | {
        leadingIcon?: never;
        trailingIcon?: MuiChipProps['deleteIcon'];
        onDelete?: MuiChipProps['onDelete'];
      }
  );

const rootStyles = (clickable: boolean) => {
  return {
    negative: fsx(['bg-negative-light-default', clickable && 'hover:bg-negative-light-hover cursor-pointer']),
    white: fsx([
      'border-shade-light-default bg-shade-white-default border-solid',
      clickable && `hover:bg-shade-light-hover cursor-pointer`,
    ]),
    default: fsx([
      'border-shade-medium-default bg-shade-light-default',
      clickable && `hover:bg-shade-light-hover cursor-pointer`,
    ]),
  };
};

const labelStyles = (_: boolean) => {
  return {
    negative: fsx(['text-negative-medium-default']),
    white: fsx(['text-shade-dark-default']),
    default: fsx(['text-shade-dark-default']),
  };
};

const iconStyles = (_: boolean) => {
  return {
    negative: fsx(['icon-negative-medium-default']),
    white: fsx(['icon-shade-dark-default']),
    default: fsx(['icon-shade-dark-default']),
  };
};

const deleteIconStyles = (clickable: boolean) => {
  return {
    negative: fsx(['text-negative-medium-default', clickable && 'hover:opacity-70']),
    white: fsx(['text-shade-dark-default', clickable && 'hover:icon-primary-dark-hover']),
    default: fsx(['text-shade-dark-default', clickable && 'hover:icon-primary-dark-hover']),
  };
};

export const Chip: FC<ChipProps> = ({
  color = 'default',
  leadingIcon,
  trailingIcon,
  clickable,
  onDelete,
  className,
  ...props
}) => {
  return (
    <MuiChip
      icon={!onDelete ? leadingIcon || trailingIcon : undefined}
      deleteIcon={trailingIcon}
      onDelete={onDelete}
      classes={{
        root: fsx([
          'inline-flex h-7 gap-1 border px-3 py-1',
          leadingIcon && 'pl-2',
          (trailingIcon || onDelete) && 'pr-2',
          !onDelete && trailingIcon ? 'flex-row-reverse' : '',
          rootStyles(!!(clickable || onDelete))[color],
          className,
        ]),
        label: fsx(['text-s px-0 font-sans'], labelStyles(!!(clickable || onDelete))[color]),
        icon: fsx(['m-0', iconStyles(!!(clickable || onDelete))[color]]),
        deleteIcon: fsx(['m-0', deleteIconStyles(!!(clickable || onDelete))[color]]),
      }}
      {...props}
    />
  );
};
