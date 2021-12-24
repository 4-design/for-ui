import React, { forwardRef } from 'react'
import { SerializedStyles } from '@emotion/react'

import MuiBackdrop, {
  BackdropProps as MuiBackdropProps,
} from '@mui/material/Backdrop'
import MuiModal, { ModalProps as MuiModalProps } from '@mui/material/Modal'

import tw, { css, TwStyle } from 'twin.macro'

type BackdropProps = MuiBackdropProps

export type ModalProps = Omit<MuiModalProps, 'children'> & {
  rootTwin?: (TwStyle | SerializedStyles)[]
  twin?: (TwStyle | SerializedStyles)[]

  /** Whether the Dialog is open */
  open: boolean

  children: React.ReactNode | React.ReactNode[]

  /** Handler that is called when the 'cancel' button of a dismissable Dialog is clicked. */
  onClose?(event: React.MouseEvent | React.KeyboardEvent): void
}

/*
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

 const Backdrop = styled('div')`
   z-index: -1;
   position: fixed;
   right: 0;
   bottom: 0;
   top: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.2);
   -webkit-tap-highlight-color: transparent;
 `
*/

const Backdrop: React.FC<BackdropProps> = ({ open, children, onClick }) => {
  return (
    <MuiBackdrop
      open={open}
      onClick={onClick}
      css={[
        css`
          &.MuiBackdrop-root {
            background-color: #001f3333;
          }
        `,
      ]}
    >
      {children}
    </MuiBackdrop>
  )
}

export const Modal: React.FC<ModalProps> = forwardRef(
  ({ rootTwin, twin, open, onClose, children, ...props }, ref) => {
    return (
      <MuiModal
        ref={ref}
        open={open}
        onClose={onClose}
        css={[rootTwin]}
        BackdropComponent={Backdrop}
        BackdropProps={{ onClick: onClose }}
        {...props}
      >
        <div
          css={[
            tw`flex justify-center min-h-screen focus-visible:ring-0 focus-visible:outline-none`,
          ]}
        >
          <div
            css={[
              tw`flex flex-col m-auto rounded-lg shadow-modal break-all transition-all transform bg-shade-white-default`,
              twin,
            ]}
          >
            {children}
          </div>
        </div>
      </MuiModal>
    )
  }
)
