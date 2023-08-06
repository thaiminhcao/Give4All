import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import ProjectDetails from '@/components/project/project-details';

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    };
};

const ProjectDetailsPage: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = () => {
    return <ProjectDetails />;
};

ProjectDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export default ProjectDetailsPage;
