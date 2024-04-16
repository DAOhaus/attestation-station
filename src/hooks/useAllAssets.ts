import { useWalletClient, usePublicClient } from "wagmi"
import { SHOP_ABI } from "../abi/shop";
import { useEffect, useState } from "react";
import { useCurrentContract } from "./useCurrentContract";

export const useAllAssets = () => {
    const { data: client } = useWalletClient();
    const publicClient = usePublicClient();
    const [assets, setAssets] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const contract = useCurrentContract();

    useEffect(() => {
        async function doit() {
            if (!client || !contract) return;
            setIsLoading(true);
            const total = await publicClient.readContract(
                {
                    address: contract,
                    abi: SHOP_ABI,
                    functionName: 'totalSupply',
                }
            )
            const result: string[] = []
            for (let id = 1; id <= total; id++) {
                const res = await publicClient.readContract(
                    {
                        address: contract,
                        abi: SHOP_ABI,
                        functionName: 'tokenURI',
                        args: [BigInt(id)],
                    }
                )
                result.push(res);
            }
            setAssets(result);
            setIsLoading(false);
        }
        doit();
    }, [client, publicClient, setAssets, contract])
    return { data: assets, isLoading };
}