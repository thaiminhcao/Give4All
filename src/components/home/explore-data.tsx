import cn from 'classnames';
import ProjectCard from '@/components/ui/project-card';
import { Project } from "@/types";

export default function ExploreData({ projectList }: { projectList?: any }) {
  return (
    <div
      className={cn(
        'grid gap-5 sm:grid-cols-2 md:grid-cols-3 3xl:!grid-cols-4 4xl:!grid-cols-5',
      )}
    >
      {projectList.map((project:any) => (
        <ProjectCard
          key={project}
          address={project}
        />
      ))}
    </div>
  );
}
