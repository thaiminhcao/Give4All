import { useContractReads } from 'wagmi';
import contractInstance from "../../config/abi/Give4All.json";

export const useContractCalls = (functionName: string[], args?: Array<any>) => {
    let result: any[] = [];
    for (let i = 0; i < functionName.length; i++) {
        const resp = useContractReads({
            contracts: [{
                address: contractInstance.address as `0x${string}`,
                abi: contractInstance.abi as any,
                functionName: functionName[i],
                args,
            }],
            onError(error) {
                console.log('Error', error)
            },

        })
        result.push(resp)
    };
    return result
}
