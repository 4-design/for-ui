import { forwardRef } from 'react'
import MuiStep, { StepProps as MuiStepProps } from '@mui/material/Step'
import MuiStepLabel, {
  StepLabelProps as MuiStepLabelProps,
} from '@mui/material/StepLabel'
import tw, { css, theme, TwStyle } from 'twin.macro'

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
                color: ${theme`backgroundColor.primary.light.default`};
                > circle {
                  ${tw`stroke-2`}
                  stroke: ${theme`iconColor.primary.dark.disabled`};
                  r: 11; // アウトラインが見切れる対応
                }
                .MuiStepIcon-text {
                  fill: ${theme`iconColor.primary.dark.disabled`};
                }

                &.Mui-active {
                  ${tw`text-shade-white-default`}
                  > circle {
                    ${tw`stroke-2`}
                    stroke: ${theme`iconColor.primary.dark.default`};
                    r: 11;
                  }
                  .MuiStepIcon-text {
                    fill: ${theme`iconColor.primary.dark.default`};
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
