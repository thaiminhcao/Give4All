import { Project } from "@/types";
import { useContractCall } from "@/lib/contract/useContractRead";
import Button from '@/components/ui/button';
import ExploreData from './explore-data'
import { useDrawer } from '@/components/drawer-views/context';
import { OptionIcon } from '@/components/icons/option';
import { SortList } from '@/components/search/filters';

export default function Explore() {
  const projectList: Project[] = useContractCall("getProjects").data as Project[];
  const projectCount: number = useContractCall("projectCount").data as number;
  const { openDrawer } = useDrawer();
  return (
    <>
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-center text-cyan-700 text-6xl font-bold">Explore Our Projects</h2>
          <p className="mt-7 text-center text-zinc-500 text-xl font-normal">Discover the Beauty of Charitable Endeavors</p>
          <div className="relative z-10 mb-6 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-900 dark:text-white sm:text-sm">
              {projectCount ? Number(projectCount) : "0"} projects
            </span>

            <div className="flex gap-6 3xl:gap-8">
              <SortList />
              <div className="hidden sm:block 2xl:hidden">
                <Button
                  shape="rounded"
                  size="small"
                  variant="ghost"
                  color="gray"
                  onClick={() => openDrawer('DRAWER_SEARCH')}
                  className="!h-11 !p-3 hover:!translate-y-0 hover:!shadow-none focus:!translate-y-0 focus:!shadow-none"
                >
                  <OptionIcon className="relative h-auto w-[18px]" />
                </Button>
              </div>
            </div>
          </div>
          <ExploreData projectList={projectList ? projectList : []}/>
        </div>
    </>
  );
}