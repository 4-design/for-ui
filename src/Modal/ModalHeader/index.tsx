import React, { ReactNode } from 'react'
import tw from 'twin.macro'

import { Typography } from '../../typography'

interface Props {
  /** The contents of the Dialog. */
  children: ReactNode | string
}

export const ModalHeader: React.FC<Props> = ({ children }) => {
  return (
    <Typography variant="subtitle1" className={tw`mt-4 leading-6 text-center`}>
      {children}
    </Typography>
  )
}
