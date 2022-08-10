import React, { ReactNode } from 'react'

type Props = {
  className?: string
  /** The contents of the Dialog. */
  children: ReactNode
}

export const ModalFooter: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-row-reverse border-t border-shade-light-default p-4">
      {children}
    </div>
  )
}
