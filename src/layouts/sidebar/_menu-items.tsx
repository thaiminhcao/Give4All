import { AboutUsIcon } from '@/components/icons/about-us';
import { AdminIcon } from '@/components/icons/admin';
import { CompassIcon } from '@/components/icons/compass';
import { HomeIcon } from '@/components/icons/home';
import { ProfileIcon } from '@/components/icons/profile';
import routes from '@/config/routes';
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
  // {
  //   name: 'About Us',
  //   icon: <AboutUsIcon />,
  //   href: routes.about_us,
  // },
  {
    name: 'answer-questions',
    icon: <AdminIcon />,
    href: routes.answer_questions,
  },
];
