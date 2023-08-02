import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import JoinNow from '@/components/home/join-now';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const JoinNowPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <JoinNow />;
};

JoinNowPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default JoinNowPage;
