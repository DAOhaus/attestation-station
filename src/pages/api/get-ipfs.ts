import { NextApiRequest, NextApiResponse } from "next";
import { ipfsConvert } from "../../Reusables/ipfsConvert";
import { request } from "../../Reusables/request";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const cid = req.query.cid as string;
    return res.status(200).json(
        await request(ipfsConvert(cid), "GET", {
            "x-pinata-gateway-token": "kCbsqDecmGBkQjzaAjV46iG_KnEL1b9Vc_82hBVa51Ip8V5KbuA_JF-6naofqLVc",
        })
    );
    // kCbsqDecmGBkQjzaAjV46iG_KnEL1b9Vc_82hBVa51Ip8V5KbuA_JF-6naofqLVc
}