import { useEffect, useState } from "react";
import { useNetwork, usePublicClient, useWalletClient } from "wagmi";
import { Offer } from "../types";
import { parseAbiItem } from "viem";
import {
  getMarketplaceContractAddress,
  publicClientToProvider,
} from "../lib/utils";
import { ethers } from "ethers";
import marketplaceConfig from "../../../contracts/out/Marketplace.sol/Marketplace.json";
import { SHOP_ABI } from "../abi/shop";
import { useAtom } from "jotai";
import { marketListingAtom } from "../store/nftJson";

export function useAllListings() {
  const publicClient = usePublicClient();
  const { chain } = useNetwork();
  const { data: client } = useWalletClient();
  // const [listings, setListings] = useAtom(marketListingAtom);
  const [listings, setListings] = useState<Offer[]>([]);

  useEffect(() => {
    (async () => {
      const provider = publicClientToProvider(publicClient);
      const marketplaceContract = getMarketplaceContractAddress(chain.id)!;
      const contract = new ethers.Contract(
        marketplaceContract,
        marketplaceConfig.abi,
        provider
      );
      const filter = contract.filters.OfferCreated();
      const events = await contract.queryFilter(filter);
      let offers = events.map((event) => event.args);
      // offers = offers.filter((x) => !!x);

      // const metas = new Map<string, string>();
      // await Promise.all(offers.map(async (offer) => {
      //   if (!offer) return
      //   const res = await publicClient.readContract(
      //     {
      //       address: offer.nftInfo.nftAddress,
      //       abi: SHOP_ABI,
      //       functionName: 'tokenURI',
      //       args: [BigInt(offer.nftInfo.tokenId)],
      //     }
      //   )

      //   metas.set(
      //     offer.nftInfo.nftAddress +
      //     offer.nftInfo.tokenId,
      //     res
      //   );
      // }))

      setListings(
        offers.map(
          (x) =>
          ({
            seller: x?.seller,
            tokenInfo: {
              amount: x?.tokenInfo.amount,
              fees: x?.tokenInfo.fees,
              tokenAddress: x?.tokenInfo.tokenAddress,
            },
            nftInfo: {
              nftAddress: x?.nftInfo.nftAddress,
              tokenId: x?.nftInfo.tokenId,
            },
            offerId: x?.offerId,
            // metaIpfs: metas.get(x!.nftInfo.nftAddress + x!.nftInfo.tokenId)!
          } as any)
        )
      );
    })();
  }, [publicClient, client, chain, setListings]);

  return listings;
}
