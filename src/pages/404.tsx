import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import AnchorLink from '@/components/ui/links/anchor-link';
import routes from '@/config/routes';
import Button from '@/components/ui/button';

const ErrorPage: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex max-w-full flex-col items-center justify-center text-center">
        <h2 className="mt-5 mb-2 text-base font-medium uppercase tracking-wide text-gray-900 dark:text-white sm:mt-10 sm:mb-4 sm:text-xl 3xl:mt-12 3xl:text-2xl">
          Error! No Result Found
        </h2>
        <p className="mb-4 max-w-full text-xs leading-loose tracking-tight text-gray-600 dark:text-gray-400 sm:mb-6 sm:w-[430px] sm:text-sm sm:leading-loose">
          Sorry, the page you are looking for might be renamed, removed, or
          might never exist.
        </p>
        <AnchorLink
          href={{
            pathname: routes.home
          }}
        >
          <Button shape="rounded">Back to Home</Button>
        </AnchorLink>
      </div>
    </>
  );
};

ErrorPage.getLayout = function getLayout(page) {
  return (
    <RootLayout contentClassName="flex items-center justify-center">
      {page}
    </RootLayout>
  );
};

export default ErrorPage;
