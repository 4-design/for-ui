import { FC } from 'react'
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip'
import tw, { css, TwStyle, theme } from 'twin.macro'

type ChipColorType = 'default' | 'negative' | 'white'

export type ChipProps = Omit<
  MuiChipProps,
  'color' | 'icon' | 'deleteIcon' | 'size' 
> & {
  twin?: TwStyle[]
  color?: ChipColorType
} & (
    | {
        leadingIcon: MuiChipProps['icon']
        trailingIcon?: never
      }
    | {
        leadingIcon?: never
        trailingIcon?: MuiChipProps['deleteIcon']
        onDelete?: MuiChipProps['onDelete']
      }
  )

const styles = (clickable: boolean) => ({
  negative: css`
    &.MuiChip-root {
      ${tw`bg-negative-light-default`};
      ${clickable && tw`hover:bg-negative-light-hover cursor-pointer`};
      > .MuiChip-label {
        ${tw`text-negative-medium-default`};
      }
      > .MuiChip-icon {
        color: ${theme`iconColor.negative.medium.default`};
      }
      > .MuiChip-deleteIcon {
        ${tw`text-negative-medium-default`};
        &:hover {
          ${clickable && tw`opacity-70`};
        }
      }
    }
  `,
  white: css`
    &.MuiChip-root {
      ${tw`border-solid border-shade-light-default bg-shade-white-default`};
      ${clickable && tw`hover:bg-shade-light-hover cursor-pointer`};
      > .MuiChip-label {
        ${tw`text-shade-dark-default`};
      }
      > .MuiChip-icon {
        color: ${theme`iconColor.shade.dark.default`};
      }
      > .MuiChip-deleteIcon {
        ${tw`text-shade-dark-default`};
        ${clickable &&
        `&:hover {
              color: ${theme`iconColor.primary.dark.hover`} !important;
            }`}
      }
    }
  `,
  default: css`
    &.MuiChip-root {
      ${tw`border-shade-medium-default bg-shade-light-default`};
      ${clickable && tw`hover:bg-shade-light-hover cursor-pointer`};
      > .MuiChip-label {
        ${tw`text-shade-dark-default`};
      }
      > .MuiChip-icon {
        color: ${theme`iconColor.shade.dark.default`};
      }
      > .MuiChip-deleteIcon {
        ${tw`text-shade-dark-default`};
        ${clickable &&
        `&:hover {
              color: ${theme`iconColor.primary.dark.hover`} !important;
            }`}
      }
    }
  `,
})

export const Chip: FC<ChipProps> = ({
  color = 'default',
  leadingIcon,
  trailingIcon,
  clickable,
  onDelete,
  twin,
  ...props
}) => {
  return (
    <MuiChip
      icon={!onDelete ? leadingIcon || trailingIcon : undefined}
      deleteIcon={trailingIcon}
      onDelete={onDelete}
      css={[
        css`
          &.MuiChip-root {
            ${tw`border px-3 py-1 h-7 inline-flex gap-1`}
            ${leadingIcon && tw`pl-2`}
              ${(trailingIcon || onDelete) && tw`pr-2`}
              ${styles(!!(clickable || onDelete))[`${color}`]}
              ${!onDelete && trailingIcon ? tw`flex-row-reverse` : ''}
              ${twin}
              > .MuiChip-label {
              ${tw`font-sans text-s px-0`}
            }
            > .MuiChip-deleteIcon,
            > .MuiChip-icon {
              ${tw`m-0`}
            }
          }
        `,
      ]}
      {...props}
    />
  )
}
