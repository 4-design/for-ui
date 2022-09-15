import clsx from 'clsx';
import { SidebarContext, SidebarProvider } from './SidebarContext';

export type SidebarProps = {
  LogoComponent: React.ElementType<{ open: boolean }>;
  children: React.ReactElement;
  defaultOpen?: boolean;
};

export const Sidebar: React.FC<SidebarProps> = ({ LogoComponent, defaultOpen = true, children }) => {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <SidebarContext.Consumer>
        {({ open }) => (
          <div
            className={clsx([
              'bg-shade-dark-default mx-0 flex h-screen w-14',
              'transition-slowest transition-width duration-300 ease-in-out',
              open ? 'w-60' : 'w-[56px]',
            ])}
          >
            <div className="bg-primary-dark-default flex grow flex-col overflow-y-auto">
              <LogoComponent open={open} />
              {children}
            </div>
          </div>
        )}
      </SidebarContext.Consumer>
    </SidebarProvider>
  );
};
