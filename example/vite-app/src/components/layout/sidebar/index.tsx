import clsx from 'clsx';
import { MdGroup, MdChevronLeft, MdDashboard, MdMap } from 'react-icons/md';
import { Sidebar as UISidebar } from '@/components/ui-parts/layout/sidebar';
import { SidebarContext } from '@/components/ui-parts/layout/sidebar/SidebarContext';
import { SidebarMenu, SidebarMenuItem } from '@/components/ui-parts/layout/sidebar/SidebarMenu';

const Logo: React.FC<{ open: boolean }> = ({ open }) => (
  <a href="/#">
    <div className={clsx(['flex', open ? 'px-4 py-3' : 'p-4'])}>
      {!open ? (
        <img src="/vite.svg" width="24" height="24" alt="logo" />
      ) : (
        <div className="flex">
          <img src="/vite.svg" width="24" height="24" alt="logo" className="mr-4" />
          <span className="text-shade-white-default w-44 overflow-x-hidden text-ellipsis whitespace-nowrap text-base">
            3design,inc
          </span>
        </div>
      )}
    </div>
  </a>
);

export const Sidebar = () => {
  return (
    <UISidebar LogoComponent={Logo} defaultOpen={true}>
      <SidebarContext.Consumer>
        {({ open, handleOpen, handleClose }) => (
          <>
            <SidebarMenu>
              <SidebarMenuItem IconComponent={MdDashboard} label="ダッシュボード" active />

              <SidebarMenuItem IconComponent={MdGroup} label="候補者一覧" />
              <SidebarMenuItem IconComponent={MdMap} label="マップ" />

              <div className="mt-auto">
                <hr className="border-shade-medium-default my-2 mx-4" />

                <div onClick={open ? handleClose : handleOpen}>
                  <SidebarMenuItem active={false} IconComponent={MdChevronLeft} label={open ? '折りたたむ' : ''} />
                </div>
              </div>
            </SidebarMenu>
          </>
        )}
      </SidebarContext.Consumer>
    </UISidebar>
  );
};
