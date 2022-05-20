import React, { VFC } from 'react'
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip'
import tw, { css, TwStyle, theme } from 'twin.macro'

type ColorType = 'default' | 'negative'

export type ChipProps = Exclude<MuiChipProps, 'color'> & {
  twin?: TwStyle[]
  color?: ColorType
}

function styles(color: ColorType) {
  switch (color) {
    case 'negative':
      return css`
        &.MuiChip-root {
          ${tw`bg-negative-light-default`};
          > .MuiChip-label {
            ${tw`text-negative-medium-default`};
          }
          > .MuiChip-deleteIcon {
            ${tw`text-negative-medium-default`};
            &:hover {
              ${tw`opacity-70`}
            }
          }
        }
      `
    case 'default':
    default:
      return css`
        &.MuiChip-root {
          ${tw`border-shade-medium-default`}
          > .MuiChip-label {
            ${tw`text-shade-dark-default`}
          }
          > .MuiChip-deleteIcon {
            ${tw`text-shade-dark-default`}
            &:hover {
              color: ${theme`iconColor.primary.dark.hover`} !important;
            }
          }
        }
      `
  }
}

export const Chip: VFC<ChipProps> = ({ color = 'default', twin, ...props }) => {
  return (
    <MuiChip
      css={[
        css`
          &.MuiChip-root {
            ${tw`border px-3 py-1`}
            ${styles(color)},
            ${twin}
            > .MuiChip-label {
              ${tw`font-sans text-s pl-0 pr-1`}
            }
            > .MuiChip-deleteIcon {
              ${tw`ml-0 -mr-1.5`}
            }
          }
        `,
      ]}
      {...props}
    />
  )
}
