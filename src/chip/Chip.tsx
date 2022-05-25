import { FC } from 'react'
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip'
import tw, { css, TwStyle, theme } from 'twin.macro'

type ChipColorType = 'default' | 'negative' | 'white'

export type ChipProps = Exclude<MuiChipProps, 'color'> & {
  twin?: TwStyle[]
  color?: ChipColorType
  leadingIcon?: MuiChipProps['icon']
  trailingIcon?: MuiChipProps['deleteIcon']
  isEndIcon?: boolean
}

const styles = {
  negative: css`
    &.MuiChip-root {
      ${tw`bg-negative-light-default hover:bg-negative-light-hover`};
      > .MuiChip-label {
        ${tw`text-negative-medium-default`};
      }
      > .MuiChip-icon {
        color: ${theme`iconColor.negative.medium.default`};
      }
      > .MuiChip-deleteIcon {
        ${tw`text-negative-medium-default`};
        &:hover {
          ${tw`opacity-70`}
        }
      }
    }
  `,
  white: css`
        &.MuiChip-root {
          ${tw`border-solid border-shade-light-default bg-shade-white-default hover:bg-shade-light-hover`};
          > .MuiChip-label {
            ${tw`text-shade-dark-default`};
          }
          > .MuiChip-icon {
            color: ${theme`iconColor.shade.dark.default`};
          }
          > .MuiChip-deleteIcon {
            ${tw`text-shade-dark-default`}
            &:hover {
              color: ${theme`iconColor.primary.dark.hover`} !important;
          }
        }
      `,
  default: css`
    &.MuiChip-root {
      ${tw`border-shade-medium-default bg-shade-light-default hover:bg-shade-light-hover`}
      > .MuiChip-label {
        ${tw`text-shade-dark-default`}
      }
      > .MuiChip-icon {
        color: ${theme`iconColor.shade.dark.default`};
      }
      > .MuiChip-deleteIcon {
        ${tw`text-shade-dark-default`}
        &:hover {
          color: ${theme`iconColor.primary.dark.hover`} !important;
        }
      }
    }
  `,
}

export const Chip: FC<ChipProps> = ({
  color = 'default',
  leadingIcon,
  isEndIcon,
  twin,
  ...props
}) => {
  return (
    <MuiChip
      icon={leadingIcon}
      css={[
        css`
          &.MuiChip-root {
            ${tw`border px-3 py-1 h-7`}
            ${styles[`${color}`]}
            ${isEndIcon && tw`flex-row-reverse`}
            ${twin}
            > .MuiChip-label {
              ${tw`font-sans text-s px-0`}
              ${(leadingIcon || isEndIcon) && tw`pr-0!`}
            }
            > .MuiChip-deleteIcon {
              ${tw`ml-0 -mr-1.5`}
            }
            .MuiChip-icon {
              ${leadingIcon && tw`ml-0 mr-1`}
              ${isEndIcon && tw`ml-1 mr-0`}
            }
          }
        `,
      ]}
      {...props}
    />
  )
}
