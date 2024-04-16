import { Button, Center, Spinner, Stack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import {
  useAccount,
  useNetwork,
  usePublicClient,
  useWalletClient,
} from "wagmi";
import { stageAtom } from "../store/stage";
import shopConfig from "../../../contracts/out/Shop.sol/Shop.json";
import { getDeployedContract, saveDeployedContract } from "../lib/utils";
import { getContractAddress } from "viem";
import { useCurrentContract } from "../hooks/useCurrentContract";
import marketplaceConfig from "../../../contracts/out/Marketplace.sol/Marketplace.json";
import { uploadedImgAtom } from "../store/uploaded";
import { nftJsonAtom } from "../store/nftJson";
import { request } from "../Reusables/request";
import { PinataPinResponse } from "@pinata/sdk";

export const TokenizeForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: client } = useWalletClient();
  const [stage, setStage] = useAtom(stageAtom);
  const publicClient = usePublicClient();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const contractAddress = useCurrentContract();
  const [uploadedImg, seUploadedImg] = useAtom(uploadedImgAtom);
  const [nftJson, setNftJson] = useAtom(nftJsonAtom);

  const getOrDeployContract = async () => {
    if(!client) return;
    if (!contractAddress) {
      const txHash = await client.deployContract({
        args: [client.account.address],
        abi: shopConfig.abi,
        account: client.account,
        // @ts-ignore
        bytecode: shopConfig.bytecode.object,
      });
      // Get the contract address from the transaction
      const transaction = await publicClient.getTransaction({
        hash: txHash,
      });
      let deployedContractAddress = getContractAddress({
        from: transaction.from,
        nonce: transaction.nonce,
      });
      saveDeployedContract(address, deployedContractAddress, chain.id);
      return deployedContractAddress;
    }
    return contractAddress;
  };

  const mintNFT = async (contract: string, cid: string) => {
    if(!client) return;
    const txHash = await client.writeContract({
      address: contract,
      abi: shopConfig.abi,
      functionName: "mint",
      account: address,
      args: [address, `ipfs://${cid}`],
    });
    console.log(txHash);
    return txHash;
  };

  return (
    <Stack pl={2} pr={4} gap={4}>
      <Center mt={"100px"}>
        <Button
          isLoading={isLoading}
          onClick={async () => {
            if (!client) {
              return;
            }
            setIsLoading(true);
            const contractAddress = await getOrDeployContract();

            // upload image
            const res = await request<PinataPinResponse>("/api/ipfs-image", "POST", {}, uploadedImg);

            // upload metadata
            const res2 = await request<PinataPinResponse>("/api/ipfs-json", "POST", {}, {
              ...nftJson,
              image: `ipfs://${res.IpfsHash}`
            });

            await mintNFT(contractAddress, res2.IpfsHash);
            setStage(stage + 1);
          }}
        >
          Tokenize
        </Button>
      </Center>
    </Stack>
  );
};
