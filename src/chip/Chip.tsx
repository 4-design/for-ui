import React, { VFC } from 'react'
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip'
import tw, { css, TwStyle, theme } from 'twin.macro'

export type ChipProps = Exclude<MuiChipProps, 'color'> & {
  twin?: TwStyle[]
  color?: 'default' | 'negative'
}

const styles: TwStyle = {
  default: tw`bg-shade-light-default`,
  negative: tw`bg-negative-light-default`,
}

export const Chip: VFC<ChipProps> = ({ color = 'default', twin, ...props }) => {
  return (
    <MuiChip
      css={[
        css`
          &.MuiChip-root {
            ${tw`border border-shade-medium-default`}
            ${styles[color]}
            ${twin}

            > .MuiChip-label {
              ${tw`font-sans text-s text-shade-dark-default`}
            }

            > .MuiChip-deleteIcon {
              ${tw`text-shade-dark-default`}
              &:hover {
                color: ${theme`iconColor.primary.dark.hover`} !important;
              }
            }
          }
        `,
      ]}
      {...props}
    />
  )
}
