import { Text, Stack, Box, Input, HStack, Select } from "@chakra-ui/react";
import { useAtom } from "jotai";
import useGlobalState, { nft } from "../hooks/useGlobalState";
import { useState } from "react";
import {
  useAccount,
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
import { request } from "../reusables/request";
import { PinataPinResponse } from "@pinata/sdk";


export const TokenizeForm = () => {
  const [nftData, setNftData] = useGlobalState(nft)
  // const [ammData, setAmmData] = useState<{ assetValue?: number, assetAmount?: number, stableAmount?: number }>({})
  // const [ercData, setErcData] = useState<{ name?: string, symbol?: string, supply?: number }>({})
  const [isLoading, setIsLoading] = useState(false);
  const { data: client } = useWalletClient();
  const [stage, setStage] = useAtom(stageAtom);
  const publicClient = usePublicClient();
  const { address } = useAccount();
  const contractAddress = useCurrentContract();
  const [uploadedImg, seUploadedImg] = useAtom(uploadedImgAtom);
  const [nftJson, setNftJson] = useAtom(nftJsonAtom);
  const shopConfig = { abi: [], bytecode: '0x1234', }
  const erc20Data = nftData.erc20 || {}
  const ammData = nftData.amm || {}

  const handleInputChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setNftData({ ...nftData, erc20: { ...erc20Data, [key]: value } })
  }

  const handleLiquidityChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    const { stableAmount, assetAmount, assetValue } = ammData
    console.log('change', key, assetAmount, stableAmount, assetValue)
    if (key !== 'supply' && assetAmount && stableAmount && erc20Data.supply) {
      console.log('left side')
      const pricePerToken = stableAmount / assetAmount
      const calculatedAssetValue = pricePerToken * erc20Data.supply
      setNftData({ ...nftData, amm: { ...ammData, [key]: value, assetValue: calculatedAssetValue } })
    } else if (key === 'assetValue') {
      console.log('right side')
      const calculatedAssetAmount = assetValue / stableAmount
      setNftData({ ...nftData, amm: { ...ammData, [key]: value, assetAmount: calculatedAssetAmount } })
    } else {

      setNftData({ ...nftData, amm: { ...ammData, [key]: value } })
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
          <Input value={erc20Data.name} name='name' placeholder='Name (Asset Tracker Token)' backgroundColor={"#D8DAF6"} onChange={handleInputChange} />
          <Input value={erc20Data.symbol} name='symbol' placeholder='Symbol (ATT)' backgroundColor={"#D8DAF6"} onChange={handleInputChange} />
        </HStack>
        <Select
          onChange={handleInputChange}
          value={nftData.supply}
          name='supply'
          backgroundColor={"#D8DAF6"}
          placeholder='Total Supply'>
          <option value='100'>100</option>
          <option value='100000'>100,000</option>
          <option value='1000000'>1,000,000</option>
        </Select>
      </Box>
      {/* {erc20Data.supply &&
        <Box>
          <Text>Uniswap Liquidity</Text>
          <Text color={"gray"} mb={2}>
            We'll use the token you specified above to create a liquidity pool on uniswap backed by our stable token STBL.
            If you want more advanced controls wait to create liquidity pool on the defi dashboard after mint.
          </Text>
          <HStack mb={2}>
            <Box>
              <Text>ERC20 {erc20Data.symbol && `(${erc20Data.symbol})`}</Text>
              <Input value={ammData?.assetAmount} type="number" name='assetAmount' placeholder='Asset Amount' backgroundColor={"#D8DAF6"} onChange={handleLiquidityChange} />
            </Box>
            <Box>
              <Text>Stable</Text>
              <Input value={ammData?.stableAmount} type="number" name='stableAmount' placeholder='STBL Amount' backgroundColor={"#D8DAF6"} onChange={handleLiquidityChange} />
            </Box>
            <Text position={'relative'} bottom={-3}>=</Text>
            <Box>
              <Text>NFT Value</Text>
              <Input value={ammData?.assetValue} type="number" name='assetValue' placeholder='Asset Value' backgroundColor={"#D8DAF6"} onChange={handleLiquidityChange} />
            </Box>
          </HStack>
        </Box>
      } */}
    </Stack>
  );
};
