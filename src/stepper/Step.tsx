import React, { forwardRef } from 'react'
import MuiStep, { StepProps as MuiStepProps } from '@mui/material/Step'
import { StepIconProps as MuiStepIconProps } from '@mui/material/StepIcon'
import MuiStepLabel, {
  StepLabelProps as MuiStepLabelProps,
} from '@mui/material/StepLabel'

export type StepProps = MuiStepProps

export type StepLabelProps = MuiStepLabelProps

export const Step = forwardRef<HTMLDivElement, StepProps & StepLabelProps>(
  (props, ref) => {
    const { children, ...rest } = props
    return (
      // <MuiStep ref={ref} css={twin} {...rest}>
      <MuiStep ref={ref} {...rest}>
        <MuiStepLabel
          ref={ref}
          StepIconComponent={Icon}
          // css={[
          //   css`
          //     & .MuiStepLabel-label {
          //       ${tw`text-shade-dark-default text-r font-normal`}
          //       font-family: inherit;
          //       &.Mui-completed,
          //       &.Mui-active {
          //         ${tw`text-shade-dark-default text-r font-normal`}
          //       }
          //     }
          //     & .MuiStepLabel-alternativeLabel {
          //       ${tw`mt-2!`}
          //     }
          //   `,
          //   twin,
          // ]}
        >
          {children}
        </MuiStepLabel>
      </MuiStep>
    )
  }
)

const Icon = (props: Partial<MuiStepIconProps>) => {
  const { completed, active, icon } = props

  return (
    <>
      <span
      // css={[
      //   css`
      //     ${tw`relative h-8 w-8 border-2 border-primary-dark-disabled text-shade-dark-disabled bg-shade-white-disabled font-bold text-r rounded-full`}
      //     ${active &&
      //     tw`border-2 border-primary-dark-default text-primary-dark-default bg-shade-white-default`}
      //   ${completed &&
      //     tw`border-0 text-shade-white-default bg-primary-dark-default`}
      //   `,
      // ]}
      >
        <span
        // css={[
        //   css`
        //     ${tw`absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4`}
        //   `,
        // ]}
        >
          {icon}
        </span>
      </span>
    </>
  )
}
