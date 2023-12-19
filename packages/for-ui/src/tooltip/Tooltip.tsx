import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import MuiTooltip, { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';
import { fsx } from '../system/fsx';
import { PropsCascader } from '../system/PropsCascader';
import { Text } from '../text';

export type TooltipProps = Pick<MuiTooltipProps, 'placement' | 'children'> & {
  title: string;
};

export const TooltipFrame = forwardRef<HTMLSpanElement, ComponentPropsWithRef<'span'>>(
  ({ children, ...props }, ref) => (
    <Text
      {...props}
      ref={ref}
      size="r"
      weight="regular"
      className={fsx(`text-shade-white-default bg-shade-dark-default inline-flex rounded px-2`)}
    >
      {children}
    </Text>
  ),
);

export const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <MuiTooltip
      slots={{
        tooltip: TooltipFrame,
      }}
      describeChild
      {...props}
    >
      <PropsCascader tabIndex={0}>{children}</PropsCascader>
    </MuiTooltip>
  );
};
