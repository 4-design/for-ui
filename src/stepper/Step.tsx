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
      <MuiStep ref={ref} css={[css``, twin]} {...rest}>
        <MuiStepLabel
          css={[
            css`
              & .MuiStepLabel-alternativeLabel {
                ${tw`mt-2!`}
              }
              & .MuiStepLabel-label {
                ${tw`text-shade-dark-default`}
              }
              & .MuiStepIcon-root {
                ${tw`text-shade-white-disabled`}
                > circle {
                  ${tw`stroke-2`}
                  stroke: #D4D9EC;
                  r: calc(12 - (2 / 2)); // アウトラインが見切れる対応
                }
                > text {
                  fill: #d4d9ec;
                }

                &.Mui-active {
                  ${tw`text-shade-white-default`}
                  > circle {
                    ${tw`stroke-2`}
                    stroke: #001f33;
                    r: calc(12 - (2 / 2));
                  }
                  > text {
                    fill: #001f33;
                  }
                }
                &.Mui-completed {
                  ${tw`text-shade-dark-default`}
                }
              }
            `,
            twin,
          ]}
        >
          {children}
        </MuiStepLabel>
      </MuiStep>
    )
  }
)
