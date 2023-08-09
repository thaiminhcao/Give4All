// Import the wagmi hooks to prepare and write to a smart contract
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
// Import the Give4All ABI(Interface)
import contractInstance from "../../config/abi/Give4All.json";

// write to a smart contract
export const useContractSend = (functionName: string, args: Array<any>) => {
    // Prepare the write to the smart contract
    const { config } = usePrepareContractWrite({
        // The address of the smart contract, in this case the Give4All from the JSON file
        address: contractInstance.address as `0x${string}`,
        // The ABI of the smart contract, in this case the Give4All from the JSON file
        abi: contractInstance.abi,
        // The smart contract function name to call
        functionName,
        // The arguments to pass to the smart contract function
        args,
        // The gas limit to use when sending a transaction
        gas: BigInt(1000000),
        onError: (err) => {
            console.log({ err })
        }
    })

    // Write to the smart contract using the prepared config
    const { data, isSuccess, write, writeAsync, error, isLoading } = useContractWrite(config)
    return { data, isSuccess, write, writeAsync, isLoading }
}