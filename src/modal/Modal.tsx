import React, { ReactNode } from 'react'
import { SerializedStyles } from '@emotion/react'
import MuiBackdrop, {
  BackdropProps as MuiBackdropProps,
} from '@material-ui/core/Backdrop'
import MuiModal from '@material-ui/core/Modal'
import tw, { css, TwStyle } from 'twin.macro'
import { ModalIcon, Mode } from './ModalIcon'

export type ModalProps = {
  rootTwin?: (TwStyle | SerializedStyles)[]
  twin?: (TwStyle | SerializedStyles)[]

  children: ReactNode

  /** Whether the Dialog is open */
  open: boolean

  /** Whether the Dialog is mode */
  mode?: Mode

  /** Handler that is called when the 'cancel' button of a dismissable Dialog is clicked. */
  onClose?(event: React.MouseEvent | React.KeyboardEvent): void
}

type BackdropProps = MuiBackdropProps

const Backdrop: React.VFC<BackdropProps> = ({ open, children }) => {
  return (
    <MuiBackdrop
      open={open}
      css={[
        css`
          &.MuiBackdrop-root {
            /* TODO: customize  */
            background-color: #001f3333;
          }
        `,
      ]}
    >
      {children}
    </MuiBackdrop>
  )
}

export const Modal: React.VFC<ModalProps> = ({
  rootTwin,
  twin,
  mode,
  open,
  onClose,
  children,
}) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      css={[rootTwin]}
      BackdropComponent={Backdrop}
    >
      <div css={[tw`flex justify-center min-h-screen`]}>
        <div
          css={[
            tw`
              flex flex-col
              m-auto
              break-all
              bg-white
              rounded-modal
              text-left
              shadow-xl
              transform transition-all
              py-4
              sm:align-middle`,
            twin,
          ]}
        >
          {mode && <ModalIcon mode={mode} />}
          {children}
        </div>
      </div>
    </MuiModal>
  )
}
