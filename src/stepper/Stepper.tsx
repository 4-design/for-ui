import { forwardRef } from 'react'
import MuiStepper, {
  StepperProps as MuiStepperProps,
} from '@mui/material/Stepper'

export type StepperProps = MuiStepperProps

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ activeStep, alternativeLabel, children, ...rest }, ref) => {
    return (
      <MuiStepper
        ref={ref}
        activeStep={activeStep}
        alternativeLabel={alternativeLabel}
        // css={[
        //   css`
        //     & .MuiStepConnector-root {
        //       ${tw`top-6 px-0 left-[calc(-50% + 1rem)] right-[calc(50% + 1rem)]`}
        //       & .MuiStepConnector-line {
        //         ${tw`border-t-2 border-shade-dark-disabled`}
        //       }
        //       &.Mui-completed .MuiStepConnector-line {
        //         ${tw`border-shade-dark-default`}
        //       }
        //       &.Mui-active .MuiStepConnector-line {
        //         ${tw`border-shade-dark-default`}
        //       }
        //       &.Mui-disabled .MuiStepConnector-line {
        //         ${tw`border-shade-dark-disabled`}
        //       }
        //     }
        //   `,
        //   twin,
        // ]}
        {...rest}
      >
        {children}
      </MuiStepper>
    )
  }
)
