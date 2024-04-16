import { S3 } from "@aws-sdk/client-s3";

import { request } from "./request";

export const IPFS_ENDPOINT = "https://4everland.io/ipfs";

const ipfsClient = new S3({
  endpoint: "https://endpoint.4everland.co",
  // signatureVersion: "v4",
  credentials: {
    accessKeyId: process.env.FOUR_EVERLAND_KEY as string,
    secretAccessKey: process.env.FOUR_EVERLAND_SECRET as string,
  },
  region: "us-west-2",
});

type WriteIpfsArgs = { bucket: string; key: string; value: string };

export async function writeIpfs({ bucket, key, value }: WriteIpfsArgs) {
  await ipfsClient.putObject({
    Bucket: bucket,
    Key: key,
    Body: JSON.stringify(value),
  });
}

type ReadIpfsArgs = { bucket: string; key: string };
type IpfsResponse<T> = {
  data: T;
  hash: string;
};

/**
 * read IPFS with hash, directly read from IPFS endpoint
 */
export async function readIpfs<T>(hash: string): Promise<IpfsResponse<T>>;

/**
 * read IPFS with bucket and key, use 4everland sdk
 */
export async function readIpfs<T>({
  bucket,
  key,
}: ReadIpfsArgs): Promise<IpfsResponse<T>>;

export async function readIpfs<T>(args: ReadIpfsArgs | string) {
  if (typeof args === "string") {
    const res = await request<T>(`https://${args}.ipfs.4everland.io`);

    return {
      data: res,
      hash: args,
    };
  } else if (args.bucket && args.key) {
    const res = await ipfsClient.getObject({
      Bucket: args.bucket,
      Key: args.key,
    });

    if (!res.Body || !res.Metadata) throw new Error("No response from IPFS");

    return {
      data: JSON.parse(await res.Body.transformToString()),
      hash: res.Metadata["ipfs-hash"],
    };
  }
}

export async function getIpfsObjectHash(args: ReadIpfsArgs) {
  try {
    const res = await ipfsClient.headObject({
      Bucket: args.bucket,
      Key: args.key,
    });

    if (res.Metadata?.["ipfs-hash"]) {
      return res.Metadata?.["ipfs-hash"];
    } else {
      // unexpected error
      throw new Error("No IPFS metadata in response.");
    }
  } catch (e: any) {
    if (e?.name === "NotFound") {
      return null;
    } else {
      // unexpected error
      throw e;
    }
  }
}
