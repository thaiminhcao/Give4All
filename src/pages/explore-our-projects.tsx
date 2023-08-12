import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import ExploreOurProjects from '@/components/home/explore-our-projects';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const ExplorePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <ExploreOurProjects />;
};

ExplorePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ExplorePage;
