import cn from 'classnames';
import ProjectCard from '@/components/ui/project-card';

export default function ExploreData({ projectList }: { projectList?: any }) {
  // Define a function to return the projects
  const getProjects = () => {
    // If there are no projects, return null
    if (!projectList.length) return null;
    const projects = [];
    // Loop through the p, return the Product component and push it to the projects array
    for (let i = 0; i < projectList.length; i++) {
      projects.push(
        <ProjectCard
          key={projectList[i]}
          address={projectList[i]}
        />
      );
    }
    return projects;
  };

  return (
    <div
      className={cn(
        'grid gap-5 sm:grid-cols-2 md:grid-cols-3 3xl:!grid-cols-4 4xl:!grid-cols-5',
      )}
    >
      {/* Loop through the projects and return the Product component */}
      {getProjects()}
    </div>
  );
}
