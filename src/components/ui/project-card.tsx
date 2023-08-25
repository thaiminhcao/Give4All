import AnchorLink from '@/components/ui/links/anchor-link';
import { Verified } from '@/components/icons/verified';
import { ProjectGridProps } from "@/types";
import { useContractCalls } from '@/lib/contract/useContractReads';

export default function ProjectCard({
  address
}: ProjectGridProps) {

  const Project = useContractCalls(["title", "description", "imageURL", "raised", "expiresAt", "status"], address, "project")

  // Cancel render UI when projects do not exist or have error occurred.
  if (!Project
    || !Project[0].data
    || !Project[0].data[0].result
    || Project[0].error
  ) {
    return
  }

  const title = Project[0].data[0].result;
  const description = Project[1].data[0].result;
  const imageURL = Project[2].data[0].result;
  const raised = Project[3].data[0].result;
  const expiresAt = Project[4].data[0].result;
  const date = new Date(Number(expiresAt)* 1000)
  const expireDate = date.getDate() + '/' +  date.getMonth() + '/' + date.getFullYear()
  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-card transition-all duration-200 hover:shadow-large dark:bg-light-dark">
      <div className="p-4">
        <AnchorLink
          href="/"
          className="flex items-center text-sm font-medium text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <span className="overflow-hidden text-ellipsis">@{address}</span>
        </AnchorLink>
      </div>
      <AnchorLink href={"/project-details?address=" + address} className="relative block w-full">
        <img src={imageURL}/>
      </AnchorLink>

      <div className="p-5">
        <AnchorLink
          href="/nft-details"
          className="flex text-lg font-medium text-black dark:text-white"
        >
          {title}
        </AnchorLink>
        <div className="mt-1.5 flex">
          <AnchorLink
            href="/"
            className="inline-flex items-center text-xs text-gray-600 dark:text-gray-400"
          >
            {description}
            <Verified className="ltr:ml-1 rtl:mr-1" />
          </AnchorLink>
        </div>
        <div className="mt-1.5 flex text-xs text-gray-600 dark:text-gray-400">
          Expire at:{expireDate}
        </div>
        <div className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
          Raised: {Number(raised)} ETH
        </div>
      </div>
    </div>
  );
}
