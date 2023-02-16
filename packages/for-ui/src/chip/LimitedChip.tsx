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
        `flex flex-row items-start border-l p-1 rounded-r w-6 h-6 [&_svg]:w-full [&_svg]:h-full focus-visible:outline-none`,
        {
          shade: `icon-shade-dark-default hover:bg-shade-white-hover focus-visible:bg-shade-white-hover border-shade-light-default hover:border-shade-medium-default focus-visible:border-shade-medium-default`,
          primary: `icon-primary-dark-default hover:bg-primary-light-hover focus-visible:bg-primary-light-hover border-primary-light-default hover:border-primary-medium-default focus-visible:border-primary-medium-default`,
          secondary: `icon-secondary-dark-default hover:bg-secondary-light-hover border-secondary-light-default hover:border-secondary-medium-default focus-visible:border-secondary-medium-default`,
          positive: `icon-positive-dark-default hover:bg-positive-light-hover focus-visible:bg-positive-light-hover border-positive-light-default hover:border-positive-medium-default focus-visible:border-positive-medium-default`,
          negative: `icon-negative-dark-default hover:bg-negative-light-hover focus-visible:bg-negative-light-hover border-negative-light-default hover:border-negative-medium-default focus-visible:border-negative-medium-default`,
          notice: `icon-notice-dark-default hover:bg-notice-light-hover focus-visible:bg-notice-light-hover border-notice-light-default hover:border-notice-medium-default focus-visible:border-notice-medium-default`,
          informative: `icon-informative-dark-default hover:bg-informative-light-hover focus-visible:bg-informative-light-hover border-informative-light-default hover:border-informative-medium-default focus-visible:border-informative-medium-default`,
        }[intention],
      ])}
      {...rest}
    >
      {icon || <MdClose />}
    </button>
  </span>
);
