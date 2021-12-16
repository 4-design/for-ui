import React, { ReactNode } from 'react'
import { SerializedStyles } from '@emotion/react'
import ModalUnstyled from '@mui/base/ModalUnstyled'

import tw, { styled, TwStyle } from 'twin.macro'

export type ModalProps = {
  rootTwin?: (TwStyle | SerializedStyles)[]
  twin?: (TwStyle | SerializedStyles)[]

  children: ReactNode

  /** Whether the Dialog is open */
  open: boolean

  /** Handler that is called when the 'cancel' button of a dismissable Dialog is clicked. */
  onClose?(event: React.MouseEvent | React.KeyboardEvent): void
}

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

export const Modal: React.VFC<ModalProps> = ({
  rootTwin,
  twin,
  open,
  onClose,
  children,
}) => {
  return (
    <StyledModal
      open={open}
      onClose={onClose}
      css={[rootTwin]}
      BackdropComponent={Backdrop}
      BackdropProps={{ onClick: onClose }}
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
    </StyledModal>
  )
}
