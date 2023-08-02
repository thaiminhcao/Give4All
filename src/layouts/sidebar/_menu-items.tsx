import routes from '@/config/routes';
import { HomeIcon } from '@/components/icons/home';
import { ProfileIcon } from '@/components/icons/profile';
import { CompassIcon } from '@/components/icons/compass';

export const menuItems = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    href: routes.home,
  },
  {
    name: 'Blog',
    icon: <CompassIcon />,
    href: routes.blog,
  },
  {
    name: 'My Project',
    icon: <ProfileIcon />,
    href: routes.project,
  },
];
