import React, { ReactNode } from 'react'
import tw from 'twin.macro'

import { Typography } from '../../typography'

interface Props {
  /** The contents of the Dialog. */
  children: ReactNode | string
}

export const ModalHeader: React.FC<Props> = ({ children }) => {
  return (
    <div tw=" p-4 border-b border-shade-light-default">
      <Typography variant="p" bold twin={tw`text-xr!`}>
        {children}
      </Typography>
    </div>
  )
}
