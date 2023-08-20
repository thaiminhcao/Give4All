import AnchorLink from '@/components/ui/links/anchor-link';
import { Verified } from '@/components/icons/verified';
import { ProjectGridProps } from "@/types";

export default function ProjectCard({
  id,
  owner,
  image,
  title,
  description,
  raised,
  expiresAt
}: ProjectGridProps) {
  const date = new Date(Number(expiresAt)* 1000)
  const expireDate = date.getDate() + '/' +  date.getMonth() + '/' + date.getFullYear()
  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-card transition-all duration-200 hover:shadow-large dark:bg-light-dark">
      <div className="p-4">
        <AnchorLink
          href="/"
          className="flex items-center text-sm font-medium text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <span className="overflow-hidden text-ellipsis">@{owner}</span>
        </AnchorLink>
      </div>
      <AnchorLink href={"/project-details?id=" + id} className="relative block w-full">
        <img src={image}/>
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
          Raised: {Number(raised)}ETH
        </div>
      </div>
    </div>
  );
}
