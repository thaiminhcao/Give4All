import { useContractCall } from '@/lib/contract/useContractRead';
import { useContractCalls } from '@/lib/contract/useContractReads';
type BlogData = {
  projectList: [];
  data: unknown[];
  functionLen: number;
};

const useBlog = (): BlogData => {
  const projectList: [] = useContractCall('getProjects').data as [];
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
    address: projectList,
  });
  const data = getProject?.map((item) => item.result) ?? [];
  return { data, projectList, functionLen };
};

export default useBlog;
