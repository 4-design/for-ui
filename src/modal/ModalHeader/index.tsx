import React, { ReactNode } from 'react'
import tw from 'twin.macro'

import { Typography } from '../../typography'

interface Props {
  /** The contents of the Dialog. */
  children: ReactNode | string
}

export const ModalHeader: React.FC<Props> = ({ children }) => {
  return (
    <Typography variant="h3" className={tw`my-4 mx-9`}>
      {children}
    </Typography>
  )
}
