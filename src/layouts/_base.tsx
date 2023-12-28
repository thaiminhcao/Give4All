import { useDrawer } from '@/components/drawer-views/context';
import { useModal } from '@/components/modal-views/context';
import SearchButton from '@/components/search/button';
import CustomButton from '@/components/ui/button/custom-button';
import ConnectWallet from '@/components/ui/connect-wallet';
import Hamburger from '@/components/ui/hamburger';
import Logo from '@/components/ui/logo';
import { MenuItems } from '@/layouts/sidebar/_layout-menu';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import cn from 'classnames';

function HeaderRightArea() {
  const isMounted = useIsMounted();
  const breakpoint = useBreakpoint();
  const { openDrawer, isOpen } = useDrawer();
  const { openModal } = useModal();
  return (
    <div className="order-last flex shrink-0 items-center">
      <div className="ltr:mr-3.5 rtl:ml-3.5 ltr:sm:mr-5 rtl:sm:ml-5 xl:hidden">
        <SearchButton
          color="white"
          className="shadow-main dark:border dark:border-solid dark:border-gray-700 dark:bg-light-dark dark:text-white"
        />
      </div>

      <div className="hidden gap-6 lg:flex 2xl:gap-8">
        {isMounted && ['xs', 'sm', 'md', 'lg'].indexOf(breakpoint) == -1 && (
          <div>
            <SearchButton variant="transparent" className="dark:text-white" />
            <CustomButton
              style="yellow"
              handlerClick={() => openModal('BUY_TOKEN_VIEW')}
              title="Buy GFA Token"
            />
          </div>
        )}
        <ConnectWallet />
      </div>

      <div className="flex items-center lg:hidden">
        <ConnectWallet />
        <Hamburger
          isOpen={isOpen}
          onClick={() => openDrawer('DRAWER_MENU')}
          color="white"
          className="shadow-main ltr:ml-3.5 rtl:mr-3.5 dark:border dark:border-solid dark:border-gray-700 dark:bg-light-dark dark:text-white ltr:sm:ml-5 rtl:sm:mr-5"
        />
      </div>
    </div>
  );
}

export function Header() {
  const isMounted = useIsMounted();
  const breakpoint = useBreakpoint();
  const { openDrawer, isOpen } = useDrawer();
  return (
    <nav
      className={cn(
        'sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-gradient-to-b from-white to-white/80 px-4 shadow-card backdrop-blur transition-all duration-300 ltr:right-0 rtl:left-0 dark:from-dark dark:to-dark/80 sm:h-20 sm:px-6 lg:px-8 3xl:px-10'
      )}
    >
      <div className="mx-auto flex w-full max-w-[2160px] items-center justify-between">
        <div className="flex items-center">
          <div className="hidden lg:mr-6 lg:block xl:hidden">
            <Hamburger
              isOpen={isOpen}
              onClick={() => openDrawer('DRAWER_MENU')}
              color="white"
              className="shadow-main dark:border dark:border-solid dark:border-gray-700 dark:bg-light-dark dark:text-white"
            />
          </div>
          <Logo />
          {isMounted && ['xs', 'sm', 'md', 'lg'].indexOf(breakpoint) == -1 && (
            <MenuItems />
          )}
        </div>
        <HeaderRightArea />
      </div>
    </nav>
  );
}

export default function BaseLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <div className="bg-light-100 dark:bg-dark-100 mt-8 flex min-h-screen flex-col gap-6 px-4 sm:px-6 lg:px-8 3xl:px-10">
        <main className="mx-auto mb-12 flex w-full max-w-[2160px] flex-grow flex-col">
          {children}
        </main>
      </div>
    </>
  );
}
