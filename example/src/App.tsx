import clsx from 'clsx'
import { MdGroup, MdChevronLeft, MdDashboard } from 'react-icons/md'
import { Sidebar, SidebarMenu, SidebarMenuItem } from './Sidebar'
import { SidebarContext } from './SidebarContext'
import './tailwindcss.css'

const Logo: React.FC<{ open: boolean }> = ({ open }) => (
  <a>
    <div className={clsx(['flex', open ? 'px-4 py-3' : 'p-4'])}>
      {!open ? (
        <img src="/logo.png" width="24" height="24" alt="logo" />
      ) : (
        <div className="flex">
          <img
            src="/logo.png"
            width="24"
            height="24"
            alt="logo"
            className="mr-4"
          />
          <span className="w-44 overflow-x-hidden text-ellipsis whitespace-nowrap text-base text-shade-white-default">
            スリーシェイク
          </span>
        </div>
      )}
    </div>
  </a>
)

function App() {
  return (
    <Sidebar LogoComponent={Logo} defaultOpen={true}>
      <SidebarContext.Consumer>
        {({ open, handleOpen, handleClose }) => (
          <>
            <SidebarMenu>
              <SidebarMenuItem
                IconComponent={MdDashboard}
                label="ダッシュボード"
              />

              <SidebarMenuItem
                IconComponent={MdGroup}
                label="候補者一覧"
                active
              />

              <div className="mt-auto">
                <hr className="my-2 mx-4 border-shade-medium-default" />

                <div onClick={open ? handleClose : handleOpen}>
                  <SidebarMenuItem
                    active={false}
                    IconComponent={MdChevronLeft}
                    label={open ? '折りたたむ' : ''}
                  />
                </div>
              </div>
            </SidebarMenu>
          </>
        )}
      </SidebarContext.Consumer>
    </Sidebar>
  )
}

export default App
