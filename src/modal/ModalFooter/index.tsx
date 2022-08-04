import React, { ReactNode } from 'react'

type Props = {
  className?: string
  /** The contents of the Dialog. */
  children: ReactNode
}

export const ModalFooter: React.FC<Props> = ({ children }) => {
  return (
    <div className="p-4 flex flex-row-reverse border-t border-shade-light-default">
      {children}
    </div>
  )
}
