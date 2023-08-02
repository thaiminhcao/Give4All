import Image from '@/components/ui/image';
import AnchorLink from '@/components/ui/links/anchor-link';
import logoMain from '@/assets/images/logo.png';
import routes from '@/config/routes';

export default function Logo() {
  return (
    <AnchorLink
      href={{
        pathname: routes.home
      }}
      className="flex w-28 outline-none sm:w-32 4xl:w-36"
    >
      <span className="relative flex overflow-hidden">
        <Image src={logoMain} alt="Give4All" height={24} priority />
      </span>
    </AnchorLink>
  );
}
