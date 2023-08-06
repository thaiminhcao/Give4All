import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import CreateProject from '@/components/home/create-project';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const CreateProjectPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <CreateProject />;
};

CreateProjectPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default CreateProjectPage;
