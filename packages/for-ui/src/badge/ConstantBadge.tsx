import { FC } from 'react';
import { fsx } from '../system/fsx';
import { ConstantBadgeProps } from './Badge';
import { Text } from '../text';

export const ConstantBadge: FC<Omit<ConstantBadgeProps, 'variant'>> = ({ intention = 'subtle', icon, label, className }) => (
  <span
    className={fsx([
      `flex flex-row items-start gap-1`,
      {
        shade: `text-shade-dark-default`,
        subtle: `text-shade-medium-default`,
        primary: `text-primary-dark-default`,
        secondary: `text-secondary-dark-default`,
        positive: `text-positive-dark-default`,
        negative: `text-negative-dark-default`,
        notice: `text-notice-dark-default`,
        informative: `text-informative-dark-default`,
      }[intention],
      className,
    ])}
  >
    <span
      className={fsx([
        `flex w-4 flex-row items-start my-1 p-0.5 rounded-full icon-shade-white-default [&>svg]:w-full [&>svg]:h-full`,
        {
          subtle: `bg-shade-medium-default`,
          shade: `bg-shade-dark-default`,
          primary: `bg-primary-dark-default`,
          secondary: `bg-secondary-dark-default`,
          positive: `bg-positive-dark-default`,
          negative: `bg-negative-dark-default`,
          notice: `bg-notice-dark-default`,
          informative: `bg-informative-dark-default`,
        }[intention],
      ])}
    >
      {icon}
    </span>
    <Text size="r" weight="bold">
      {label}
    </Text>
  </span>
);
