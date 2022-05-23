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
      ${tw`(text-accent)!`}
    }

    & .MuiInput-root {
      &:before {
        ${tw`(text-accent)!`}
      }
      &:after {
        ${tw`(border-accent)!`}
      }
    }

    & .MuiInput-root {
      &:hover:not(.Mui-disabled):before {
        ${tw`border-b border-accent`}
      }
    }
  `,
  outlined: css`
    & .MuiOutlinedInput-root {
      ${tw`p-0!`}

      &.Mui-disabled {
        ${tw`bg-gray-light`}
      }

      & fieldset {
        ${tw`border border-low`}
      }

      &.Mui-disabled .MuiOutlinedInput-notchedOutline {
        ${tw`border border-low`}
      }

      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        ${tw`border border-accent`}
      }

      &.Mui-error .MuiOutlinedInput-notchedOutline {
        ${tw`border border-error`}
      }

      &:hover {
        & fieldset {
          ${tw`border border-accent`}
        }

        &.Mui-disabled .MuiOutlinedInput-notchedOutline {
          ${tw`border border-low`}
        }

        &.Mui-focused .MuiOutlinedInput-notchedOutline {
          ${tw`border border-accent`}
        }

        &.Mui-error .MuiOutlinedInput-notchedOutline {
          ${tw`border border-error`}
        }
      }

      &.Mui-error fieldset {
        ${tw`border-error`}
      }

      & .Mui-focused fieldset {
        ${tw`border border-accent!`}
      }
    }

    & .MuiOutlinedInput-input {
      ${tw`(text-high)!`}
    }

    & .MuiInputBase-input {
      ${tw`(py-2 px-3 focus:shadow-none)!`}
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
                  ${tw`text-error`}
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
              <label css={[tw`mb-2 text-middle`, labelTwin]}>
                {label}
                {required && <span tw="text-error">*</span>}
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
