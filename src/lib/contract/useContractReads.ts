import { useContractReads } from 'wagmi';
import mainContract from "../../config/abi/Give4All.json";
import projectContract from "../../config/abi/project.json";

export const useContractCalls = (functionName: string[] , contractAddress:string = mainContract.address, abi: string = "main",
    args?: Array<any>, watch?: boolean, from? : `0x${string}` | undefined) => {

    let result: any[] = [];
    let abiJson: Array<any> = mainContract.abi
    if (abi == "project") 
        abiJson = projectContract.abi

    for (let i = 0; i < functionName.length; i++) {
        const resp = useContractReads({
            contracts: [{
                address: contractAddress as `0x${string}`,
                abi: abiJson,
                functionName: functionName[i],
                args,
            }],
            watch,
            onError(error) {
                console.log('Error', error)
            },

        })
        result.push(resp)
    };
    return result
}
