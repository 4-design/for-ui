import { FC } from 'react'
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip'
import clsx from 'clsx'

type ChipColorType = 'default' | 'negative' | 'white'

export type ChipProps = Omit<
  MuiChipProps,
  'color' | 'icon' | 'deleteIcon' | 'size'
> & {
  // twin?: TwStyle[]
  color?: ChipColorType
} & (
    | {
        leadingIcon: MuiChipProps['icon']
        trailingIcon?: never
      }
    | {
        leadingIcon?: never
        trailingIcon?: MuiChipProps['deleteIcon']
        onDelete?: MuiChipProps['onDelete']
      }
  )

const rootStyles = (clickable: boolean) => {
  return {
    negative: clsx([
      'bg-negative-light-default',
      clickable && 'cursor-pointer hover:bg-negative-light-hover',
    ]),
    white: clsx([
      'border-solid border-shade-light-default bg-shade-white-default',
      clickable && `cursor-pointer hover:bg-shade-light-hover`,
    ]),
    default: clsx([
      'border-shade-medium-default bg-shade-light-default',
      clickable && `cursor-pointer hover:bg-shade-light-hover`,
    ]),
  }
}

const labelStyles = (_: boolean) => {
  return {
    negative: clsx(['text-negative-medium-default']),
    white: clsx(['text-shade-dark-default']),
    default: clsx(['text-shade-dark-default']),
  }
}

const iconStyles = (_: boolean) => {
  return {
    negative: clsx(['icon-negative-medium-default']),
    white: clsx(['icon-shade-dark-default']),
    default: clsx(['icon-shade-dark-default']),
  }
}

const deleteIconStyles = (clickable: boolean) => {
  return {
    negative: clsx([
      'text-negative-medium-default',
      clickable && 'hover:opacity-70',
    ]),
    white: clsx([
      'text-shade-dark-default',
      clickable && 'hover:icon-primary-dark-hover',
    ]),
    default: clsx([
      'text-shade-dark-default',
      clickable && 'hover:icon-primary-dark-hover',
    ]),
  }
}

export const Chip: FC<ChipProps> = ({
  color = 'default',
  leadingIcon,
  trailingIcon,
  clickable,
  onDelete,
  ...props
}) => {
  return (
    <MuiChip
      icon={!onDelete ? leadingIcon || trailingIcon : undefined}
      deleteIcon={trailingIcon}
      onDelete={onDelete}
      classes={{
        root: clsx([
          'inline-flex h-7 gap-1 border px-3 py-1',
          leadingIcon && 'pl-2',
          (trailingIcon || onDelete) && 'pr-2',
          !onDelete && trailingIcon ? 'flex-row-reverse' : '',
          rootStyles(!!(clickable || onDelete))[color],
        ]),
        label: clsx(
          ['px-0 font-sans text-s'],
          labelStyles(!!(clickable || onDelete))[color]
        ),
        icon: clsx(['m-0', iconStyles(!!(clickable || onDelete))[color]]),
        deleteIcon: clsx([
          'm-0',
          deleteIconStyles(!!(clickable || onDelete))[color],
        ]),
      }}
      {...props}
    />
  )
}
