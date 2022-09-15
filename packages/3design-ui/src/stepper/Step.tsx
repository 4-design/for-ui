import React, { forwardRef } from 'react';
import MuiStep, { StepProps as MuiStepProps } from '@mui/material/Step';
import { StepIconProps as MuiStepIconProps } from '@mui/material/StepIcon';
import MuiStepLabel, { StepLabelProps as MuiStepLabelProps } from '@mui/material/StepLabel';
import clsx from 'clsx';

export type StepProps = MuiStepProps;

export type StepLabelProps = MuiStepLabelProps;

export const Step = forwardRef<HTMLDivElement, StepProps & StepLabelProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <MuiStep ref={ref} {...rest}>
      <MuiStepLabel
        ref={ref}
        StepIconComponent={Icon}
        classes={{
          root: clsx(['mt-0']),
          label: clsx(['mt-2 text-r font-normal text-shade-dark-default']),
          completed: clsx(['text-r font-normal text-shade-dark-default']),
          active: clsx(['text-r font-normal text-shade-dark-default']),
          iconContainer: clsx(['mt-2']),
        }}
      >
        {children}
      </MuiStepLabel>
    </MuiStep>
  );
});

const Icon = (props: Partial<MuiStepIconProps>) => {
  const { completed, active, icon } = props;

  return (
    <>
      <span
        className={clsx([
          'text-r relative h-8 w-8 rounded-full  border-2 font-bold',
          active
            ? 'border-primary-dark-default bg-shade-white-default text-primary-dark-default border-2'
            : completed
            ? 'bg-primary-dark-default text-shade-white-default border-0'
            : 'border-primary-dark-disabled bg-shade-white-disabled text-shade-dark-disabled',
        ])}
      >
        <span className={clsx(['absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'])}>{icon}</span>
      </span>
    </>
  );
};
