import { NextApiRequest, NextApiResponse } from "next";
import { pinata } from "../../Reusables/pinata_sdk";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
        return res.status(200).json(
            await pinata.pinJSONToIPFS({ data: req.body })
        );
    }
    else {
        return res.status(400);
    }
}