/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

type UseSidebar = {
  open: boolean
  handleOpen: (event: React.MouseEvent<HTMLElement>) => void
  handleClose: (event: React.MouseEvent<HTMLElement>) => void
}

const useSidebar = (defaultOpen = true): UseSidebar => {
  const [open, setOpen] = React.useState(defaultOpen)

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()

    setOpen(true)
  }

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()

    setOpen(false)
  }

  return {
    open,
    handleOpen,
    handleClose,
  }
}

type SidebarContext = UseSidebar

export const SidebarContext = React.createContext<SidebarContext>({
  open: true,
  handleOpen: () => {},
  handleClose: () => {},
})

export const useSidebarContext = (): SidebarContext =>
  React.useContext(SidebarContext)

type SidebarProviderProps = {
  defaultOpen?: boolean
  children: React.ReactElement
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  defaultOpen = true,
  children,
}) => {
  const { open, handleOpen, handleClose } = useSidebar(defaultOpen)

  return (
    <SidebarContext.Provider value={{ open, handleOpen, handleClose }}>
      {React.cloneElement(children, { open, handleOpen, handleClose })}
    </SidebarContext.Provider>
  )
}
