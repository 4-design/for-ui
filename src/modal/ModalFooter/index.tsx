import React, { ReactNode } from 'react'
import 'twin.macro'

interface Props {
  className?: string
  /** The contents of the Dialog. */
  children: ReactNode
}

export const ModalFooter: React.FC<Props> = ({ children }) => {
  return <div tw="mt-2 mb-4 mx-9 flex flex-row-reverse">{children}</div>
}
