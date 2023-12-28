import { useContractReads } from 'wagmi';
import mainContract from '../../config/abi/Give4All.json';
import projectContract from '../../config/abi/project.json';

type props = {
  functionName: string[];
  contractAddress?: any;
  address?: any;
  abi: string;
  args?: Array<any>;
  watch?: boolean;
  from?: `0x${string}` | undefined;
};
export const useContractCalls = ({
  abi,
  contractAddress,
  functionName,
  address,
  args,
  from,
  watch,
}: props) => {
  let abiJson: Array<any> = mainContract.abi;
  let contracts = [];
  let isArray = true;
  let len = 1;
  if (abi == 'project') {
    abiJson = projectContract.abi;
  }
  if (typeof address == 'undefined' || typeof address == 'string') {
    isArray = false;
    len = 1;
  } else {
    len = address.length;
  }
  for (let i = 0; i < len; i++) {
    for (let k = 0; k < functionName?.length ?? 1; k++) {
      contracts.push({
        address: (isArray ? address[i] : address) as `0x${string}`,
        abi: abiJson,
        functionName: functionName[k],
        args,
      });
    }
  }
  const { data, isError, isLoading } = useContractReads({
    contracts,
  });
  return data;
};
