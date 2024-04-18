import { Button, Center, Text, Stack, Box, Input, HStack, Select } from "@chakra-ui/react";
import { useAtom } from "jotai";
import useGlobalState, { nft } from "../hooks/useGlobalState";
import { createRef, useState } from "react";
import {
  useAccount,
  useNetwork,
  usePublicClient,
  useWalletClient,
} from "wagmi";
import { stageAtom } from "../store/stage";
// import shopConfig from "../../../contracts/out/Shop.sol/Shop.json";
import { getDeployedContract, saveDeployedContract } from "../lib/utils";
import { getContractAddress } from "viem";
import { useCurrentContract } from "../hooks/useCurrentContract";
// import marketplaceConfig from "../../../contracts/out/Marketplace.sol/Marketplace.json";
import { uploadedImgAtom } from "../store/uploaded";
import { nftJsonAtom } from "../store/nftJson";
import { request } from "../Reusables/request";
import { PinataPinResponse } from "@pinata/sdk";

export const TokenizeForm = () => {
  const [nftData, setNftData] = useGlobalState(nft)
  const [ammData, setAmmData] = useState<{ assetValue?: number, assetAmount?: number, stableAmount?: number }>({})
  const [ercData, setErcData] = useState<{ name?: string, symbol?: string, supply?: number }>({})
  console.log('tokenize data', ercData, ammData)
  const [isLoading, setIsLoading] = useState(false);
  const { data: client } = useWalletClient();
  const [stage, setStage] = useAtom(stageAtom);
  const publicClient = usePublicClient();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const contractAddress = useCurrentContract();
  const [uploadedImg, seUploadedImg] = useAtom(uploadedImgAtom);
  const [nftJson, setNftJson] = useAtom(nftJsonAtom);
  const shopConfig = { abi: [], bytecode: '0x1234', }

  const handleInputChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setErcData({ ...ercData, [key]: value })
  }

  const handleLiquidityChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    const { stableAmount, assetAmount, assetValue } = ammData
    if (key !== 'supply' && assetAmount && stableAmount && ercData.supply) {
      console.log('calculate')
      const pricePerToken = stableAmount / assetAmount
      const calculatedAssetValue = pricePerToken * ercData.supply
      setAmmData({ ...ammData, [key]: value, assetValue: calculatedAssetValue })
    }

  }

  return (
    <Stack pl={2} pr={4} gap={6}>
      <Text color={"gray"}>
        This section will help walk you through setting up fractional erc20 tokens for use in DeFi.
        Feel free to skip this step and proceed directly to mint if you do not desire instant real liquidity for your NFT.
      </Text>
      <Box>
        <Text mb={2}> ERC20 Token</Text>
        <HStack mb={2}>
          <Input name='name' placeholder='Name (Asset Tracker Token)' backgroundColor={"#D8DAF6"} onChange={handleInputChange} />
          <Input type='symbol' placeholder='Symbol (ATT)' backgroundColor={"#D8DAF6"} onChange={handleInputChange} />
        </HStack>
        <Select
          onChange={handleInputChange}
          value={nftData.category}
          name='supply'
          backgroundColor={"#D8DAF6"}
          placeholder='Total Supply'>
          <option value='100'>100</option>
          <option value='100000'>100,000</option>
          <option value='1000000'>1,000,000</option>
        </Select>
      </Box>
      {ercData.supply &&
        <Box>
          <Text>Uniswap Liquidity</Text>
          <Text color={"gray"} mb={2}>
            We'll use the token you specified above to create a liquidity pool on uniswap backed by our stable token STBL.
            If you want more advanced controls wait to create liquidity pool on the defi dashboard after mint.
          </Text>
          <HStack mb={2}>
            <Box>
              <Text>ERC20</Text>
              <Input value={ammData?.assetAmount} type="number" name='assetAmount' placeholder='Asset Amount' backgroundColor={"#D8DAF6"} onChange={handleLiquidityChange} />
            </Box>
            <Box>
              <Text>Stable</Text>
              <Input value={ammData?.stableAmount} type="number" name='stableAmount' placeholder='STBL Amount' backgroundColor={"#D8DAF6"} onChange={handleLiquidityChange} />
            </Box>
            <Text>=</Text>
            <Box>
              <Text>NFT Value</Text>
              <Input value={ammData?.assetValue} type="number" name='assetValue' placeholder='Asset Value' backgroundColor={"#D8DAF6"} onChange={handleLiquidityChange} />
            </Box>
          </HStack>
        </Box>
      }
      {/* <Stack pl={2} pr={4} gap={4}>
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
    </Stack> */}
    </Stack>
  );
};


// const getOrDeployContract = async () => {
//   if (!client) return;
//   if (!contractAddress) {
//     const txHash = await client.deployContract({
//       args: [client.account.address],
//       abi: shopConfig.abi,
//       account: client.account,
//       // @ts-ignore
//       bytecode: shopConfig.bytecode.object,
//     });
//     // Get the contract address from the transaction
//     const transaction = await publicClient.getTransaction({
//       hash: txHash,
//     });
//     let deployedContractAddress = getContractAddress({
//       from: transaction.from,
//       nonce: transaction.nonce,
//     });
//     saveDeployedContract(address as string, deployedContractAddress, chain?.id);
//     return deployedContractAddress;
//   }
//   return contractAddress;
// };

// const mintNFT = async (contract: string, cid: string) => {
//   if (!client) return;
//   const txHash = await client.writeContract({
//     address: contract,
//     abi: shopConfig.abi,
//     functionName: "mint",
//     account: address,
//     args: [address, `ipfs://${cid}`],
//   });
//   console.log(txHash);
//   return txHash;
// };