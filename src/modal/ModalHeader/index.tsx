import React, { ReactNode } from 'react'

import { Typography } from '../../typography'

type Props = {
  /** The contents of the Dialog. */
  children: ReactNode | string
}

export const ModalHeader: React.FC<Props> = ({ children }) => {
  return (
    <div className="p-4 border-b border-shade-light-default">
      <Typography variant="p" bold className={`font-bold! text-r!`}>
        {children}
      </Typography>
    </div>
  )
}
