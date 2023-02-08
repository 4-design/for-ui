import { FC } from 'react';
import { fsx } from '../system/fsx';
import { Text } from '../text';
import { BadgeProps } from './Badge';

export const OutlinedBadge: FC<Omit<BadgeProps, 'variant'>> = ({ intention = 'subtle', icon, label, className }) => (
  <span
    className={fsx([
      `flex flex-row items-center gap-1 w-fit justify-center rounded px-2 border`,
      {
        subtle: `bg-shade-light-default text-shade-dark-default border-shade-light-default`,
        shade: `bg-shade-white-default text-shade-dark-default border-shade-light-default`,
        primary: `bg-primary-light-default text-primary-dark-default border-primary-light-default`,
        secondary: `bg-secondary-light-default text-secondary-dark-default border-secondary-light-default`,
        positive: `bg-positive-light-default text-positive-dark-default border-positive-light-default`,
        negative: `bg-negative-light-default text-negative-dark-default border-negative-light-default`,
        notice: `bg-notice-light-default text-notice-dark-default border-notice-light-default`,
        informative: `bg-informative-light-default text-informative-dark-default border-informative-light-default`,
      }[intention],
      className,
    ])}
  >
    {icon && (
      <span
        className={fsx([
          {
            subtle: `icon-shade-medium-default`,
            shade: `icon-shade-medium-default`,
            primary: `icon-primary-medium-default`,
            secondary: `icon-secondary-medium-default`,
            positive: `icon-positive-medium-default`,
            negative: `icon-negative-medium-default`,
            notice: `icon-notice-medium-default`,
            informative: `icon-informative-medium-default`,
          }[intention],
        ])}
      >
        {icon}
      </span>
    )}
    <Text size="r" weight="regular">
      {label}
    </Text>
  </span>
);
