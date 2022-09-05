import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  SidebarComponent: React.ElementType
}>

export const Layout: FC<Props> = ({ SidebarComponent, children }) => {
  return (
    <div className="flex h-screen flex-row overflow-hidden">
      <SidebarComponent />
      <div className="flex flex-1 flex-col overflow-hidden">{children}</div>
    </div>
  )
}
