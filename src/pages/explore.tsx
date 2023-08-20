import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import Explore from '@/components/home/explore';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const ExplorePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <Explore />;
};

ExplorePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ExplorePage;
