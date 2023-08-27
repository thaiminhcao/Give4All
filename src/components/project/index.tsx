import ExploreData from '@/components/home/explore-data'
import { Project } from '@/types';
import { useContractCall } from '@/lib/contract/useContractRead';
import { useAccount } from 'wagmi';
import ActiveLink from '../ui/links/active-link';

export default function ExploreOurProjects() {
  const { address, isConnected } = useAccount();
  let projectList: [] = useContractCall('getProjects').data as [];
  projectList = projectList?.filter((project) => project.owner === address);

  if (!isConnected) {
    return (
      <>
        <h2 className="text-center text-6xl font-bold text-cyan-700">
          My Projects
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
          My Projects
        </h2>
        <p className="mt-7 text-center text-xl font-normal text-zinc-500">
          Discover the Beauty of Charitable Endeavors
        </p>
        {projectList?.length > 0 ? (
          <ExploreData projectList={projectList ? projectList : []}/>
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
