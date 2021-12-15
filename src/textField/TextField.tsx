import React, { useMemo } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField'
import NumberFormat from 'react-number-format'
import tw, { TwStyle, css } from 'twin.macro'

export type TextFieldProps = MuiTextFieldProps & {
  unitLabel?: string
  isPriceFormat?: boolean
  variant?: 'outlined' | 'standard'
  twin?: TwStyle
  labelTwin?: TwStyle
  inputTwin?: TwStyle
}

type NumberFormatCustomProps = {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
  other: {
    children?: React.ReactNode
  }
}

const styles = {
  standard: css`
    & .MuiInputLabel-root.Mui-focused {
      ${tw`(text-primary-dark-default)!`}
    }

    & .MuiInput-root {
      &:before {
        ${tw`text-primary-dark-default!`}
      }
      &:after {
        ${tw`border-primary-dark-default!`}
      }
    }

    & .MuiInput-root {
      &:hover:not(.Mui-disabled):before {
        ${tw`border-b border-primary-dark-default`}
      }
    }
  `,
  outlined: css`
    & .MuiOutlinedInput-root {
      ${tw`p-0! text-shade-light-default`}

      &.Mui-disabled {
        ${tw`bg-primary-light-default`}
      }

      & fieldset {
        ${tw`border border-shade-medium-default`}
      }

      &.Mui-disabled .MuiOutlinedInput-notchedOutline {
        ${tw`border border-shade-medium-default`}
      }

      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        ${tw`border border-primary-dark-default`}
      }

      &.Mui-error .MuiOutlinedInput-notchedOutline {
        ${tw`border border-negative-medium-default`}
      }

      &:hover {
        & fieldset {
          ${tw`border border-primary-dark-default`}
        }

        & .Mui-error .MuiOutlinedInput-notchedOutline {
          ${tw`border border-negative-medium-default`}
        }

        & .Mui-disabled .MuiOutlinedInput-notchedOutline {
          ${tw`border border-shade-medium-default`}
        }

        & .Mui-focused .MuiOutlinedInput-notchedOutline {
          ${tw`border border-primary-dark-default`}
        }
      }

      &.Mui-error fieldset {
        ${tw`border-negative-medium-default`}
      }

      & .Mui-focused fieldset {
        ${tw`border border-primary-dark-default!`}
      }
    }

    & .MuiInputBase-input {
      ${tw`py-2 px-3 focus:shadow-none`}
    }

    & .MuiFormHelperText-root {
      > .Mui-error {
        ${tw`text-negative-medium-default`}
      }
    }
  `,
}

const NumberFormatCustom: React.ForwardRefExoticComponent<NumberFormatCustomProps> =
  React.forwardRef(({ onChange, name, ...other }, ref) => {
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: name,
              value: values.value,
            },
          })
        }}
        thousandSeparator
        isNumericString
      />
    )
  })

export const TextField: React.ForwardRefExoticComponent<TextFieldProps> =
  React.forwardRef(
    (
      {
        label,
        variant = 'outlined',
        twin,
        labelTwin,
        inputTwin,
        required,
        inputRef,
        error,
        unitLabel = '',
        isPriceFormat = false,
        ...rest
      },
      ref
    ) => {
      /**
       * react-hook-form : v6 ~> inputRef   v7 ~> ref
       * TODO: react-hook-form v7で統合されたらrefを直接インラインで使用
       */
      const validRef = useMemo(() => {
        return inputRef ? inputRef : ref
      }, [ref, inputRef])

      const inputProps = useMemo(() => {
        const unitLabelProps = {
          endAdornment: (
            <InputAdornment position="start">{unitLabel}</InputAdornment>
          ),
        }
        const priceFormatProps = { inputComponent: NumberFormatCustom as any } // eslint-disable-line

        return {
          ...(unitLabel ? unitLabelProps : {}),
          ...(isPriceFormat ? priceFormatProps : {}),
        }
      }, [unitLabel, isPriceFormat])

      const renderStandardTextField = (): JSX.Element => {
        return (
          <MuiTextField
            error={error}
            inputRef={validRef}
            required={required}
            label={label}
            variant={variant}
            InputProps={inputProps}
            css={[
              styles['standard'],
              css`
                & .MuiFormLabel-root {
                  ${labelTwin}
                }

                & .MuiFormLabel-asterisk {
                  ${tw`text-negative-medium-default`}
                }
                & .MuiInputBase-root {
                  ${inputTwin}
                }
              `,
              twin,
            ]}
            {...rest}
          />
        )
      }

      const renderOutlinedTextField = (): JSX.Element => {
        return (
          <div css={[tw`flex flex-col`, twin]}>
            {label && (
              <label css={[tw`mb-2 text-shade-medium-default`, labelTwin]}>
                {label}
                {required && <span tw="text-negative-medium-default">*</span>}
              </label>
            )}

            <MuiTextField
              error={error}
              inputRef={validRef}
              required={required}
              variant={variant}
              InputProps={inputProps}
              css={[
                styles['outlined'],
                css`
                  & .MuiInputBase-root {
                    ${inputTwin}
                  }
                `,
              ]}
              {...rest}
            />
          </div>
        )
      }

      return variant === 'outlined'
        ? renderOutlinedTextField()
        : renderStandardTextField()
    }
  )
