// Import the wagmi hooks to prepare and write to a smart contract
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
// Import the Give4All ABI(Interface)
import contractInstance from '../../config/abi/Give4All.json';
import { get } from 'lodash';
import { etherUnits } from 'viem';

// write to a smart contract
export const useContractSend = (
  functionName: string,
  args: Array<any>,
  value?: bigint
) => {
  // Prepare the write to the smart contract
  const { config } = usePrepareContractWrite({
    // The address of the smart contract, in this case the Give4All from the JSON file
    address: contractInstance.address as `0x${string}`,
    // The ABI of the smart contract, in this case the Give4All from the JSON file
    abi: contractInstance.abi,
    // The smart contract function name to call
    functionName,
    // The arguments to pass to the smart contract function
    value,
    args,
    onError: (err) => {
      console.log({ err });
    },
  });
  // filter for BuyToken events
  const filter = contractInstance.abi
    .map((item) => get(item, 'name'))
    .filter((item) => item === 'BuyToken');
  // Write to the smart contract using the prepared config
  const { data, isSuccess, write, writeAsync, error, isLoading } =
    useContractWrite(config);
  return { data, isSuccess, write, writeAsync, isLoading };
};
