import React, { VFC } from 'react'
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from '@mui/material/Divider'

export type DividerProps = MuiDividerProps & {}

export const Divider: VFC<DividerProps> = ({ twin }) => {
  return (
    <MuiDivider
      light
      // css={[
      //   css`
      //     &.MuiDivider-root {
      //       ${tw`border border-shade-medium-default`}
      //       ${twin}
      //     }
      //   `,
      // ]}
    />
  )
}
