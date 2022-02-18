import { Children, forwardRef } from 'react'
import MuiStepper, {
  StepperProps as MuiStepperProps,
} from '@mui/material/Stepper'
import tw, { css, TwStyle } from 'twin.macro'

export interface StepperProps extends MuiStepperProps {
  twin?: TwStyle[]
}

// forwardRef 子要素にアクセスするやつ
export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ twin, activeStep, alternativeLabel, children, ...rest }, ref) => {
    return (
      <MuiStepper
        ref={ref}
        activeStep={activeStep}
        alternativeLabel={alternativeLabel}
        css={[
          css`
            & .MuiStepConnector-line {
              ${tw`border-t-2`}
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
