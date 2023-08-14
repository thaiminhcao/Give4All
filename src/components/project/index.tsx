import Slider from '@/components/ui/slider';
import Card from '../ui/card';
import { Project } from '@/types';
import { useContractCall } from '@/lib/contract/useContractRead';
import { useAccount } from 'wagmi';
import ActiveLink from '../ui/links/active-link';

export default function ExploreOurProjects() {
  const { address, isConnected } = useAccount();
  let projectList: Project[] = useContractCall('getProjects').data as Project[];
  projectList = projectList?.filter((project) => project.owner === address);

  if (!isConnected) {
    return (
      <>
        <h2 className="text-center text-6xl font-bold text-cyan-700">
          Your Projects
        </h2>
        <p className="mt-7 text-center text-xl font-normal text-zinc-500">
          Please connect your wallet to view projects
        </p>
      </>
    );
  }

  return (
    <>
      <div className="mx-auto w-full max-w-5xl p-5 pt-4 xs:p-6 xs:pt-5">
        <h2 className="text-center text-6xl font-bold text-cyan-700">
          Your Projects
        </h2>
        <p className="mt-7 text-center text-xl font-normal text-zinc-500">
          Discover the Beauty of Charitable Endeavors
        </p>
        {projectList?.length > 0 ? (
          <Slider options={{ align: 'center' }}>
            {projectList.map((project, i) => (
              <div key={i} className="flex-[0_0_90%] pl-1 md:flex-[0_0_30%]">
                <Card {...project} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex justify-center">
            <ActiveLink href="/create-project">
              <button className="mt-6 rounded-lg bg-yellow-500 p-1 px-10 text-xl font-bold text-white">
                Create your first project
              </button>
            </ActiveLink>
          </div>
        )}
      </div>
    </>
  );
}
