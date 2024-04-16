import { useEffect, useState } from "react";
import { useNetwork } from "wagmi";
import {
  getJSONRPCProvider,
  getMarketplaceContractAddress,
} from "../lib/utils";
import marketplaceConfig from "../../../contracts/out/Marketplace.sol/Marketplace.json";
import { ethers } from "ethers";

export function usePriceFeeds() {
  const { chain } = useNetwork();
  const [rate, setRate] = useState({
    eth_usd: 0,
    usdc_usd: 0,
  });

  useEffect(() => {
    (async () => {
      if (chain && chain.id) {
        const marketplaceContract = getMarketplaceContractAddress(chain.id)!;
        const provider = getJSONRPCProvider();
        const contract = new ethers.Contract(
          marketplaceContract,
          marketplaceConfig.abi,
          provider
        );
        const [value]: [ethers.BigNumber] = await contract.getETHtoUSD();
        const eth_usd = parseFloat(ethers.utils.formatUnits(value, 18));
        const [value2]: [ethers.BigNumber] = await contract.getUSDCtoUSD();
        const usdc_usd = parseFloat(ethers.utils.formatUnits(value2, 18));
        setRate({
          eth_usd,
          usdc_usd,
        });
      }
    })();
  }, [chain]);

  return rate;
}
