import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import Project from '@/components/my-project';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const ProjectPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <Project />;
};

ProjectPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProjectPage;
