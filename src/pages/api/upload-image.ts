import { NextApiRequest, NextApiResponse } from "next";
import { readIpfs, writeIpfs } from "../../Reusables/ipfs_sdk";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
        return res.status(200).json({
            message: JSON.stringify(
                await writeIpfs({
                    bucket: "ethglobal-img",
                    key: "1",
                    value: req.body,
                })
            )
        });
    }
    else {
        return res.status(200).json(
            await readIpfs({
                bucket: "ethglobal-img",
                key: "1",
            })
        );
    }
}