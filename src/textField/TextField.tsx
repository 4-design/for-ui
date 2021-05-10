import React from 'react'
import tw, { TwStyle, css } from 'twin.macro'
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField'
import { SerializedStyles } from '@emotion/react'

export type TextFieldProps = MuiTextFieldProps & {
  variant: 'outlined' | 'standard'

  twin?: TwStyle
  labelTwin?: TwStyle
  inputTwin?: TwStyle
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
    }

    & .MuiOutlinedInput-input {
      ${tw`(text-high)!`}
    }

    & .MuiInputBase-input {
      ${tw`(py-2 px-3 h-6 focus:shadow-none)!`}
    }

    & fieldset {
      ${tw`(border border-low)!`}
    }

    & .Mui-focused fieldset {
      ${tw`(border border-accent)!`}
    }
  `,
}

export const TextField: React.VFC<TextFieldProps> = ({
  label,
  variant = 'outlined',
  twin,
  labelTwin,
  inputTwin,
  required,
  ...rest
}) => {
  return (
    <>
      {variant === 'standard' ? (
        <MuiTextField
          required={required}
          label={label}
          variant={variant}
          css={[
            styles[variant],
            css`
              & .MuiFormLabel-root {
                ${labelTwin}
              }

              & .MuiInputBase-root {
                ${inputTwin}
              }
            `,
            twin,
          ]}
          {...rest}
        />
      ) : (
        <div css={[tw`flex flex-col`, twin]}>
          {label && (
            <label css={[tw`mb-2 text-middle`, labelTwin]}>
              {label}
              {required && <span>*</span>}
            </label>
          )}

          <MuiTextField
            required={required}
            label={undefined}
            variant={variant}
            css={[
              styles[variant],
              css`
                & .MuiInputBase-root {
                  ${inputTwin}
                }
              `,
            ]}
            {...rest}
          />
        </div>
      )}
    </>
  )
}
