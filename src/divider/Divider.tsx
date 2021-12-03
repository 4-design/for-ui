import { VFC } from 'react'
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from '@mui/material/Divider'
import tw, { css, TwStyle } from 'twin.macro'

export type DividerProps = MuiDividerProps & {
  twin?: TwStyle[]
}

export const Divider: VFC<DividerProps> = ({ twin }) => {
  return (
    <MuiDivider
      light
      css={[
        css`
          &.MuiDivider-root {
            ${tw`border border-shade-medium-default`}
            ${twin}
          }
        `,
      ]}
    />
  )
}
