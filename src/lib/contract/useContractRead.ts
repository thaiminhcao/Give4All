// Import the wagmi hook to read from a smart contract
import { useContractRead } from 'wagmi';
// Import the Give4All ABI(Interface)
import mainContract from "../../config/abi/Give4All.json";
import projectContract from "../../config/abi/project.json";

// read from smart contract
export const useContractCall = (functionName: string, contractAddress:string = mainContract.address, abi: string = "main",
    args?: Array<any>, watch?: boolean, from? : `0x${string}` | undefined) => {
    let abiJson: Array<any> = mainContract.abi
    if (abi == "project") 
        abiJson = projectContract.abi
    const resp = useContractRead({
        // The address of the smart contract, in this case the Give4All from the JSON file
        address: contractAddress as `0x${string}`,
        // The ABI of the smart contract, in this case the Give4All from the JSON file
        abi: abiJson,
        // The smart contract function name to call
        functionName: functionName,
        // The arguments to pass to the smart contract function
        args,
        // A boolean to watch for changes in the smart contract. If true, the hook will re-run when the smart contract changes
        watch: true,
        onError: (err) => {
            console.log({ err })
        }
    })

    return resp
}