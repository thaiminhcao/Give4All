'use client';
import AnchorLink from '@/components/ui/links/anchor-link';
import { Verified } from '@/components/icons/verified';
import { ProjectGridProps } from '@/types';
import { useContractCalls } from '@/lib/contract/useContractReads';
import { useEffect } from 'react';
import { sortDataByProjectList } from '@/helper';

export default function ProjectCard({ address }: ProjectGridProps) {
  let title = 0;
  let description = '';
  let imageURL = '';
  let raised = 0;
  let expiresAt = 0;
  let date = new Date(Number(expiresAt) * 1000);
  const functionName = [
    'title',
    'description',
    'imageURL',
    'raised',
    'expiresAt',
    'status',
  ];
  const functionLen = functionName.length;
  const abi = 'project';
  const getProject = useContractCalls({
    functionName,
    abi,
    address,
  });
  const data = getProject?.map((item) => item.result) ?? [];

  const result = sortDataByProjectList(
    address ?? [],
    data as [],
    functionName.length
  );
  // Cancel render UI when projects do not exist or have error occurred.
  if (!getProject) {
    return;
  } else {
    title = result.get(address)?.title;
    description = result.get(address)?.description;
    imageURL = result.get(address)?.imageURL;
    raised = result.get(address)?.raised;
    expiresAt = result.get(address)?.expiresAt;
  }

  let expireDate =
    date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
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
      <AnchorLink
        href={'/project-details?address=' + address}
        className="relative block w-full"
      >
        <img src={imageURL} />
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
