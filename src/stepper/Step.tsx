import React, { forwardRef } from 'react'
import MuiStep, { StepProps as MuiStepProps } from '@mui/material/Step'
import { StepIconProps as MuiStepIconProps } from '@mui/material/StepIcon'
import MuiStepLabel, {
  StepLabelProps as MuiStepLabelProps,
} from '@mui/material/StepLabel'
import { MdCircle, MdOutlineCircle } from 'react-icons/md'
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
      <MuiStep ref={ref} css={twin} {...rest}>
        <MuiStepLabel
          ref={ref}
          StepIconComponent={Icon}
          css={[
            css`
              & .MuiStepLabel-alternativeLabel {
                ${tw`mt-2!`}
              }
              & .MuiStepLabel-label {
                ${tw`text-shade-dark-default`}
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

const Icon = (props: Partial<MuiStepIconProps>) => {
  const { completed, active, icon } = props
  const commonStyle = tw`absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4`

  return (
    <span
      css={[
        css`
          ${tw`relative font-bold text-base`}
          ${active && tw`text-shade-dark-default`}
        `,
      ]}
    >
      {active ? (
        <>
          <MdOutlineCircle size={38} />
          <span
            css={[
              css`
                ${commonStyle}
              `,
            ]}
          >
            {icon}
          </span>
        </>
      ) : (
        <>
          <MdCircle
            size={38}
            color={
              completed
                ? `${theme`iconColor.primary.dark.default`}`
                : `${theme`backgroundColor.primary.light.default`}`
            }
            css={
              !completed && [
                css`
                  path + path {
                    ${tw`stroke-2`}
                    stroke: ${theme`iconColor.primary.dark.disabled`};
                  }
                `,
              ]
            }
          />
          <span
            css={[
              css`
                ${commonStyle}
                ${completed
                  ? tw`text-shade-white-default`
                  : tw`text-shade-dark-disabled`}
              `,
            ]}
          >
            {icon}
          </span>
        </>
      )}
    </span>
  )
}
