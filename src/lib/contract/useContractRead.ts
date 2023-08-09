// Import the wagmi hook to read from a smart contract
import { useContractRead } from 'wagmi';
// Import the Give4All ABI(Interface)
import contractInstance from "../../config/abi/Give4All.json";

// read from smart contract
export const useContractCall = (functionName: string, args?: Array<any>, watch?: boolean, from? : `0x${string}` | undefined) => {
    const resp = useContractRead({
        // The address of the smart contract, in this case the Give4All from the JSON file
        address: contractInstance.address as `0x${string}`,
        // The ABI of the smart contract, in this case the Give4All from the JSON file
        abi: contractInstance.abi,
        // The smart contract function name to call
        functionName: functionName,
        // The arguments to pass to the smart contract function
        args,
        // A boolean to watch for changes in the smart contract. If true, the hook will re-run when the smart contract changes
        watch,
        onError: (err) => {
            console.log({ err })
        }
    })

    return resp
}