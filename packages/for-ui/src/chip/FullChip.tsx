import { FC } from 'react';
import { fsx } from '../system/fsx';
import { Text } from '../text';
import { ChipProps } from './Chip';

export const FullChip: FC<Omit<ChipProps, 'clickableArea'>> = ({
  label,
  icon,
  intention = 'shade',
  onClick,
  className,
  ...rest
}) => (
  <button
    onClick={onClick}
    className={fsx([
      `inline-flex flex-row gap-1 items-center justify-center rounded border px-2 w-min break-keep shadow-attractive`,
      {
        shade: `bg-shade-white-default border-shade-medium-default`,
        primary: `bg-primary-light-default border-primary-medium-default`,
        secondary: `bg-secondary-light-default border-secondary-medium-default`,
        positive: `bg-positive-light-default border-positive-medium-default`,
        negative: `bg-negative-light-default border-negative-medium-default`,
        notice: `bg-notice-light-default border-notice-medium-default`,
        informative: `bg-informative-light-default border-informative-medium-default`,
      }[intention],
      {
        shade: `hover:bg-shade-white-hover`,
        primary: `hover:bg-primary-light-hover`,
        secondary: `hover:bg-secondary-light-hover`,
        positive: `hover:bg-positive-light-hover`,
        negative: `hover:bg-negative-light-hover`,
        notice: `hover:bg-notice-light-hover`,
        informative: `hover:bg-informative-light-hover`,
      }[intention],
      className,
    ])}
    {...rest}
  >
    {icon && (
      <span
        className={fsx([
          `w-4 h-4 [&_svg]:w-full [&_svg]:h-full`,
          {
            shade: `icon-shade-dark-default`,
            primary: `icon-primary-dark-default`,
            secondary: `icon-secondary-dark-default`,
            positive: `icon-positive-dark-default`,
            negative: `icon-negative-dark-default`,
            notice: `icon-notice-dark-default`,
            informative: `icon-informative-dark-default`,
          }[intention],
        ])}
      >
        {icon}
      </span>
    )}
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
  </button>
);
