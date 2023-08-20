import cn from 'classnames';
import { NFTList } from '@/data/static/nft-list';
import ProjectCard from '@/components/ui/project-card';
import { Project } from "@/types";

export default function ExploreData({ projectList }: { projectList?: Project[] }) {
  return (
    <div
      className={cn(
        'grid gap-5 sm:grid-cols-2 md:grid-cols-3 3xl:!grid-cols-4 4xl:!grid-cols-5',
      )}
    >
      {projectList.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          expiresAt={project.expiresAt}
          owner={project.owner}
          image={project.imageURL}
          title={project.title}
          description={project.description}
          raised={project.raised}
        />
      ))}
    </div>
  );
}
