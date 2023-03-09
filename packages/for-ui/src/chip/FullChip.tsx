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
      `shadow-attractive focus-visible:shadow-focus inline-flex w-min flex-row items-center justify-center gap-1 break-keep rounded px-2 outline outline-1 -outline-offset-1`,
      {
        shade: `bg-shade-white-default outline-shade-medium-default hover:bg-shade-white-hover focus-visible:bg-shade-white-hover`,
        primary: `bg-primary-light-default outline-primary-medium-default hover:bg-primary-light-hover focus-visible:bg-primary-light-hover`,
        secondary: `bg-secondary-light-default outline-secondary-medium-default hover:bg-secondary-light-hover focus-visible:bg-secondary-light-hover`,
        positive: `bg-positive-light-default outline-positive-medium-default hover:bg-positive-light-hover focus-visible:bg-positive-light-hover`,
        negative: `bg-negative-light-default outline-negative-medium-default hover:bg-negative-light-hover focus-visible:bg-negative-light-hover`,
        notice: `bg-notice-light-default outline-notice-medium-default hover:bg-notice-light-hover focus-visible:bg-notice-light-hover`,
        informative: `bg-informative-light-default outline-informative-medium-default hover:bg-informative-light-hover focus-visible:bg-informative-light-hover`,
      }[intention],
      className,
    ])}
    {...rest}
  >
    {icon && (
      <span
        className={fsx([
          `h-4 w-4 [&_svg]:h-full [&_svg]:w-full`,
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
