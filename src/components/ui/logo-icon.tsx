import Image from '@/components/ui/image';
import logoMain from '@/assets/images/logo.png';

const Logo: React.FC<React.SVGAttributes<{}>> = (props) => {
  return (
    <div className="flex cursor-pointer outline-none" {...props}>
      <span className="relative flex overflow-hidden">
        <Image src={logoMain} alt="Give4All" height={24} priority />
      </span>
    </div>
  );
};

export default Logo;
