import dynamic from 'next/dynamic';
import Loader from '@/components/ui/loader';

const BaseLayout = dynamic(() => import('@/layouts/_base'), {
  loading: () => <FallbackLoader />,
});

function FallbackLoader() {
  return (
    <div className="fixed z-50 grid h-full w-full place-content-center">
      <Loader variant="blink" />
    </div>
  );
}

export default function RootLayout({
  children,
}: React.PropsWithChildren) {
  return <BaseLayout>{children}</BaseLayout>;
}
