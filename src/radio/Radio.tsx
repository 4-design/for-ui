import { FC, Fragment, memo, forwardRef } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio'

export interface RadioProps extends MuiRadioProps {
  label?: string
  error?: string
  nopadding?: boolean
}

const Indicator: FC<{ checked: boolean; disabled: boolean }> = ({
  checked,
  disabled,
}) => (
  <span
  // css={[
  //   tw`w-5 h-5 bg-shade-white-default rounded-full transition-[border-width] duration-100`,
  //   checked ? tw`border-7` : tw`border-2`,
  //   disabled
  //     ? tw`border-shade-medium-disabled`
  //     : checked
  //     ? tw`border-secondary-dark-default`
  //     : tw`border-shade-medium-default`,
  // ]}
  />
)

const _Radio: FC<RadioProps> = memo(({ disabled, ...rest }) => (
  <MuiRadio
    disableRipple
    icon={<Indicator checked={false} disabled={!!disabled} />}
    checkedIcon={<Indicator checked={true} disabled={!!disabled} />}
    disabled={disabled}
    // css={[
    //   css`
    //     &.MuiRadio-root {
    //       ${nopadding ? tw`p-0!` : tw`p-1`}
    //       ${
    //         /* Hover style for Indicator. Did not work well if written in Indicator component. */ ''
    //       }
    //       &:hover:not(.Mui-checked) span {
    //         ${tw`border-secondary-dark-default border-3`};
    //       }
    //       &:hover {
    //         ${tw`bg-transparent`};
    //       }
    //       &.Mui-focusVisible span {
    //         ${tw`outline-focus`};
    //       }
    //     }
    //   `,
    //   twin,
    // ]}
    {...rest}
  />
))

export const Radio: FC<RadioProps> = forwardRef(
  ({ label, value, disabled, ...rest }, ref) => {
    return (
      <Fragment>
        {label ? (
          <FormControlLabel
            disabled={disabled}
            value={value}
            label={label}
            control={<_Radio {...rest} />}
            ref={ref}
            // css={[
            //   css`
            //     ${tw`flex gap-2 m-0`};
            //     & .MuiFormControlLabel-label {
            //       ${tw`(font-sans text-s text-shade-dark-default)!`};
            //       &.Mui-disabled {
            //         ${tw`text-shade-dark-disabled!`};
            //       }
            //     }
            //   `,
            // ]}
          />
        ) : (
          <_Radio value={value} disabled={disabled} ref={ref} {...rest} />
        )}
      </Fragment>
    )
  }
)
