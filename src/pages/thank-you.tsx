import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import Image from '@/components/ui/image';
import ThankYouBanner from '@/assets/images/thank_you_banner.png';

const ThankYouPage: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex max-w-full flex-col items-center justify-center text-center">
        <Image
            src={ThankYouBanner}
            alt="Banner image"
            />
        <h2 className="mt-5 mb-2 text-base font-medium uppercase tracking-wide text-gray-900 dark:text-white sm:mt-10 sm:mb-4 sm:text-xl 3xl:mt-12 3xl:text-2xl">
            Thank You
        </h2>
        <p className="mb-4 max-w-full text-xs leading-loose tracking-tight text-gray-600 dark:text-gray-400 sm:mb-6 sm:w-[430px] sm:text-sm sm:leading-loose">
            Your project is successfully published
        </p>
      </div>
    </>
  );
};

ThankYouPage.getLayout = function getLayout(page) {
  return (
    <RootLayout contentClassName="flex items-center justify-center">
      {page}
    </RootLayout>
  );
};

export default ThankYouPage;
