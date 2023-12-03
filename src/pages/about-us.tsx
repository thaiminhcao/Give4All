import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import AboutUs from '@/components/about-us';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const AboutUsPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <AboutUs />;
};

AboutUsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default AboutUsPage;
