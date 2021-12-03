import React, { ReactNode } from 'react'
import 'twin.macro'
import { Text } from '../../typography/Typography'

interface Props {
  /** The contents of the Dialog. */
  children: ReactNode | string
}

export const ModalContent: React.FC<Props> = ({ children }) => {
  return (
    <div tw="p-4">
      <Text variant="p" bold={false}>
        {children}
      </Text>
    </div>
  )
}
