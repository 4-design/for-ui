import { forwardRef } from 'react';
import { StepConnector, stepConnectorClasses } from '@mui/material';
import MuiStepper, { StepperProps as MuiStepperProps } from '@mui/material/Stepper';
import clsx from 'clsx';

export type StepperProps = MuiStepperProps;

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ activeStep, alternativeLabel, children, ...rest }, ref) => {
    return (
      <MuiStepper
        ref={ref}
        activeStep={activeStep}
        alternativeLabel={alternativeLabel}
        connector={
          <StepConnector
            classes={{
              root: clsx(['right-[calc(50%+1rem)] left-[calc(-50%+1rem)] top-6 px-0']),
              line: clsx(['border-t-2']),
            }}
            sx={{
              [`&.${stepConnectorClasses.active}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                  borderColor: 'var(--shade-border-dark-default)',
                },
              },

              [`&.${stepConnectorClasses.completed}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                  borderColor: 'var(--shade-border-dark-default)',
                },
              },

              [`&.${stepConnectorClasses.disabled}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                  borderColor: 'var(--shade-border-dark-disabled)',
                },
              },
            }}
          />
        }
        {...rest}
      >
        {children}
      </MuiStepper>
    );
  }
);
