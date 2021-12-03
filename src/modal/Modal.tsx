import React, { ReactNode } from 'react'
import { SerializedStyles } from '@emotion/react'
import MuiBackdrop, {
  BackdropProps as MuiBackdropProps,
} from '@mui/material/Backdrop'
import MuiModal from '@mui/material/Modal'
import tw, { css, TwStyle } from 'twin.macro'

export type ModalProps = {
  rootTwin?: (TwStyle | SerializedStyles)[]
  twin?: (TwStyle | SerializedStyles)[]

  children: ReactNode

  /** Whether the Dialog is open */
  open: boolean

  /** Handler that is called when the 'cancel' button of a dismissable Dialog is clicked. */
  onClose?(event: React.MouseEvent | React.KeyboardEvent): void
}

type BackdropProps = MuiBackdropProps

const Backdrop: React.VFC<BackdropProps> = ({ open, children, onClick }) => {
  
  return (
    <MuiBackdrop
      open={open}
      onClick={onClick}
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
      BackdropProps={{ onClick: onClose }}
    >
      <div css={[tw`flex justify-center min-h-screen`]}>
        <div
          css={[
            tw`flex flex-col py-4 m-auto text-left break-all transition-all transform bg-shade-white-default shadow-xl rounded-modal sm:align-middle`,
            twin,
          ]}
        >
          {children}
        </div>
      </div>
    </MuiModal>
  )
}
