import { VFC } from 'react'
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from '@material-ui/core/Divider'
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
            ${tw`border border-low`}
            ${twin}
          }
        `,
      ]}
    />
  )
}
