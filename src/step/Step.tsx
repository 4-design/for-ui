import { Children, forwardRef } from 'react'
import MuiStep, { StepProps as MuiStepProps } from '@mui/material/Step'
import MuiStepLabel, {
  StepLabelProps as MuiStepLabelProps,
} from '@mui/material/StepLabel'
import tw, { css, TwStyle } from 'twin.macro'

export interface StepProps extends MuiStepProps {
  twin?: TwStyle[]
}

export interface StepLabelProps extends MuiStepLabelProps {
  twin?: TwStyle[]
}

export const Step = forwardRef<HTMLDivElement, StepProps & StepLabelProps>(
  (props, ref) => {
    const { twin, children, ...rest } = props
    return (
      <MuiStep
        ref={ref}
        css={[
          css`
            & .MuiStep-paper {
            }
          `,
          twin,
        ]}
        {...rest}
      >
        <MuiStepLabel>{children}</MuiStepLabel>
      </MuiStep>
    )
  }
)
