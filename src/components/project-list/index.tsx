import Slider from '@/components/ui/slider';
import Card from '../ui/card/card';
import { Project } from '@/types';
import { useContractCall } from '@/lib/contract/useContractRead';

export default function ProjectList() {
  const projects: Project[] = useContractCall('getProjects').data as Project[];

  return (
    <div className="mx-auto w-full max-w-5xl p-5 pt-4 xs:p-6 xs:pt-5">
      <h2 className="text-center text-6xl font-bold text-cyan-700">
        Explore Our Projects
      </h2>
      <h3 className="mt-7 text-center text-xl font-normal text-zinc-500">
        Discover the Beauty of Charitable Endeavors
      </h3>

      <Slider options={{ align: 'center' }}>
        {projects.map((project, i) => (
          <div key={i} className="flex-[0_0_90%] pl-1 md:flex-[0_0_30%]">
            <Card {...project} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
