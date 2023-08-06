import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import CreateProjectForm from '@/components/home/create-project-form';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const CreateProjectFormPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <CreateProjectForm />;
};

CreateProjectFormPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default CreateProjectFormPage;
