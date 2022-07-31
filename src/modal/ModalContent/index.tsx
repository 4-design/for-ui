import React from 'react'
import 'twin.macro'

export type ModalContentProps = {
  children: React.ReactNode
}

export const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return <div tw="p-4">{children}</div>
}
