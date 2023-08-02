import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import Blog from '@/components/blog';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const BlogPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <Blog />;
};

BlogPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default BlogPage;
