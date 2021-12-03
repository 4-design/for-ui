import React, { ReactNode } from 'react'
import 'twin.macro'

interface Props {
  /** The contents of the Dialog. */
  children: ReactNode | string
}

export const ModalContent: React.FC<Props> = ({ children }) => {
  return <div tw="my-4 mx-9 text-shade-dark-default">{children}</div>
}
