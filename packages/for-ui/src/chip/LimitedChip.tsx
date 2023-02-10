import { FC } from 'react';
import { fsx } from '../system/fsx';
import { MdClose } from 'react-icons/md';
import { Text } from '../text';
import { ChipProps } from './Chip';

export const LimitedChip: FC<Omit<ChipProps, 'clickableArea'>> = ({
  label,
  icon,
  intention = 'shade',
  onClick,
  className,
  ...rest
}) => (
  <span
    className={fsx([
      `inline-flex flex-row gap-1 items-center justify-center rounded border px-2 w-min break-keep pr-0 shadow-attractive`,
      {
        shade: `bg-shade-white-default border-shade-medium-default`,
        primary: `bg-primary-light-default border-primary-medium-default`,
        secondary: `bg-secondary-light-default border-secondary-medium-default`,
        positive: `bg-positive-light-default border-positive-medium-default`,
        negative: `bg-negative-light-default border-negative-medium-default`,
        notice: `bg-notice-light-default border-notice-medium-default`,
        informative: `bg-informative-light-default border-informative-medium-default`,
      }[intention],
      className,
    ])}
  >
    <Text
      className={fsx([
        `flex items-center`,
        {
          shade: `text-shade-dark-default`,
          primary: `text-primary-dark-default`,
          secondary: `text-secondary-dark-default`,
          positive: `text-positive-dark-default`,
          negative: `text-negative-dark-default`,
          notice: `text-notice-dark-default`,
          informative: `text-informative-dark-default`,
        }[intention],
      ])}
    >
      {label}
    </Text>
    <button
      onClick={onClick}
      className={fsx([
        `flex flex-row items-start border-l p-1 rounded-r w-6 h-6 [&_svg]:w-full [&_svg]:h-full`,
        {
          shade: `icon-shade-dark-default bg-shade-white-default hover:bg-shade-white-hover border-shade-light-default hover:border-shade-medium-default`,
          primary: `icon-primary-dark-default bg-primary-light-default hover:bg-primary-light-hover border-primary-light-default hover:border-primary-medium-default`,
          secondary: `icon-secondary-dark-default bg-secondary-light-default hover:bg-secondary-light-hover border-secondary-light-default hover:border-secondary-medium-default`,
          positive: `icon-positive-dark-default bg-positive-light-default hover:bg-positive-light-hover border-positive-light-default hover:border-positive-medium-default`,
          negative: `icon-negative-dark-default bg-negative-light-default hover:bg-negative-light-hover border-negative-light-default hover:border-negative-medium-default`,
          notice: `icon-notice-dark-default bg-notice-light-default hover:bg-notice-light-hover border-notice-light-default hover:border-notice-medium-default`,
          informative: `icon-informative-dark-default bg-informative-light-default hover:bg-informative-light-hover border-informative-light-default hover:border-informative-medium-default`,
        }[intention],
      ])}
      {...rest}
    >
      {icon || <MdClose />}
    </button>
  </span>
);
