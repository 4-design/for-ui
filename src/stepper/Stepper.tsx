import { Children, forwardRef } from 'react'
import MuiStepper, {
  StepperProps as MuiStepperProps,
} from '@mui/material/Stepper'
import tw, { css, TwStyle } from 'twin.macro'

export interface StepperProps extends MuiStepperProps {
  twin?: TwStyle[]
}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ twin, activeStep, alternativeLabel, children, ...rest }, ref) => {
    return (
      <MuiStepper
        ref={ref}
        activeStep={activeStep}
        alternativeLabel={alternativeLabel}
        css={[
          css`
            & .MuiStepConnector-root {
              ${tw`top-5`}
              & .MuiStepConnector-line {
                ${tw`border-t-2`}
              }
              &.Mui-completed .MuiStepConnector-line {
                ${tw`border-shade-dark-default`}
              }
              &.Mui-disabled .MuiStepConnector-line {
                ${tw`border-shade-dark-disabled`}
              }
            }
          `,
          twin,
        ]}
        {...rest}
      >
        {children}
      </MuiStepper>
    )
  }
)
