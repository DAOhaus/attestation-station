import { useEffect, useState } from "react"
import { request } from "../Reusables/request"
import { NFTJson } from "../store/nftJson"

export const useNFTJson = (cid?: string) => {
    const [data, setData] = useState<NFTJson | undefined>(undefined);
    useEffect(() => {
        if (!cid) return;
        request<NFTJson>(`/api/get-ipfs?cid=` + cid, "GET", {
        })
            .then((data) => {
                setData(data)
            })
    }, [setData, cid]);
    return { data: data }
}