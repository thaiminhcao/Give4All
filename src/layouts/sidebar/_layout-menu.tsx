import { useDrawer } from '@/components/drawer-views/context';
import { Close } from '@/components/icons/close';
import Button from '@/components/ui/button';
import { MenuItem } from '@/components/ui/collapsible-menu';
import ActiveLink from '@/components/ui/links/active-link';
import Logo from '@/components/ui/logo';
import Scrollbar from '@/components/ui/scrollbar';
import { menuItems } from '@/layouts/sidebar/_menu-items';
import { Fragment } from 'react';
import { useAccount } from 'wagmi';

export function MenuItems() {
  const { address } = useAccount();
  let isAdmin = false;
  return (
    <div className="flex items-center xl:px-10 2xl:px-14 3xl:px-16">
      {menuItems.map((item, index) => (
        <Fragment key={'layout' + item.name + index}>
          <ActiveLink
            href={{
              pathname: item.href,
            }}
            className="mx-3 text-[13px] font-medium uppercase text-gray-600 transition first:ml-0 last:mr-0 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white 2xl:mx-3 2xl:text-sm 3xl:mx-4"
            activeClassName="!text-gray-900 dark:!text-white"
          >
            {item.name}
          </ActiveLink>
        </Fragment>
      ))}
    </div>
  );
}

export default function DrawerMenu() {
  const { closeDrawer } = useDrawer();
  return (
    <div className="relative w-full max-w-full bg-white dark:bg-dark xs:w-80">
      <div className="flex h-24 items-center justify-between overflow-hidden px-6 py-4">
        <Logo />
        <div className="md:hidden">
          <Button
            title="Close"
            color="white"
            shape="circle"
            variant="transparent"
            size="small"
            onClick={closeDrawer}
          >
            <Close className="h-auto w-2.5" />
          </Button>
        </div>
      </div>
      <Scrollbar style={{ height: 'calc(100% - 96px)' }}>
        <div className="px-6 pb-14 2xl:px-8">
          <div className="mt-2 sm:mt-4 md:mt-8 lg:mt-12">
            {menuItems.map((item, index) => (
              <MenuItem
                key={'drawer' + item.name + index}
                name={item.name}
                href={item.href}
                icon={item.icon}
                // dropdownItems={item.dropdownItems}
              />
            ))}
          </div>
        </div>
      </Scrollbar>
    </div>
  );
}
