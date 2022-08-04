import React, { forwardRef } from 'react'

import MuiBackdrop, {
  BackdropProps as MuiBackdropProps,
} from '@mui/material/Backdrop'
import MuiModal, { ModalProps as MuiModalProps } from '@mui/material/Modal'

type BackdropProps = MuiBackdropProps

export type ModalProps = Omit<MuiModalProps, 'children'> & {
  /** Whether the Dialog is open */
  open: boolean

  children: React.ReactNode | React.ReactNode[]

  /** Handler that is called when the 'cancel' button of a dismissable Dialog is clicked. */
  onClose?(event: React.MouseEvent | React.KeyboardEvent): void
}

const Backdrop: React.FC<BackdropProps> = ({ open, children, onClick }) => {
  return (
    <MuiBackdrop
      open={open}
      onClick={onClick}
      // css={[
      //   css`
      //     &.MuiBackdrop-root {
      //       background-color: #001f3333;
      //     }
      //   `,
      // ]}
    >
      {children}
    </MuiBackdrop>
  )
}

export const Modal: React.FC<ModalProps> = forwardRef(
  ({ open, onClose, children, ...props }, ref) => {
    return (
      <MuiModal
        ref={ref}
        open={open}
        onClose={onClose}
        // css={[rootTwin]}
        BackdropComponent={Backdrop}
        BackdropProps={{ onClick: onClose }}
        {...props}
      >
        <div className="flex min-h-screen justify-center focus-visible:outline-none focus-visible:ring-0">
          <div
            className="m-auto flex flex-col break-all rounded-lg bg-shade-white-default shadow-modal transition-all"
            // css={[
            //   tw`flex flex-col m-auto rounded-lg shadow-modal break-all transition-all transform bg-shade-white-default`,
            //   twin,
            // ]}
          >
            {children}
          </div>
        </div>
      </MuiModal>
    )
  }
)
