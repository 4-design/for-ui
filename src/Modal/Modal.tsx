import React, { ReactNode } from 'react'
import tw, { TwStyle } from 'twin.macro'
import { ModalIcon, Mode } from './ModalIcon'
import MuiModal from '@material-ui/core/Modal'
import { SerializedStyles } from '@emotion/react'
interface ModalProps {
  twin?: (TwStyle | SerializedStyles)[] /** The contents of the Dialog. */
  children: ReactNode

  /** Whether the Dialog is open */
  open: boolean

  /** Whether the Dialog is mode */
  mode?: Mode

  /** Handler that is called when the 'cancel' button of a dismissable Dialog is clicked. */
  onClose?(event: React.MouseEvent | React.KeyboardEvent): void
}

export const Modal: React.VFC<ModalProps> = ({
  twin,
  mode,
  open,
  onClose,
  children,
}) => {
  return (
    <MuiModal open={open} onClose={onClose} css={[twin]}>
      <div tw="fixed z-10 inset-0 overflow-y-auto">
        <div tw="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center">
          <div
            tw="
              m-auto
              max-w-lg w-full
              break-all
              bg-white
              rounded-lg
              text-left
              shadow-xl
              transform transition-all
              p-6 pb-4
              sm:align-middle"
          >
            {mode && <ModalIcon mode={mode} />}
            {children}
          </div>
        </div>
      </div>
    </MuiModal>
  )
}
