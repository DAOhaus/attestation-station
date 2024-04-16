import { PublicClient, WalletClient } from "viem";
import {
  getDeployedContract,
  getMarketplaceContractAddress,
  objectToTuple,
  publicClientToProvider,
  walletClientToSigner,
} from "./utils";
import marketplaceConfig from "../../../contracts/out/Marketplace.sol/Marketplace.json";
import shopConfig from "../../../contracts/out/Shop.sol/Shop.json";
import { NFTInfo, Offer, TokenInfo } from "../types";
import { ethers } from "ethers";

export async function listProduct(
  tokenInfo: TokenInfo,
  nftInfo: NFTInfo,
  expiresAt: number,
  chainId: number,
  client: WalletClient,
  publicClient: PublicClient
) {
  const shopContract = await getDeployedContract(
    client.account?.address!,
    chainId
  );
  const marketplaceContract = await getMarketplaceContractAddress(chainId);
  const isApprovedForAll = (await publicClient.readContract({
    address: shopContract as `0x${string}`,
    abi: shopConfig.abi,
    functionName: "isApprovedForAll",
    args: [client.account?.address!, marketplaceContract],
  } as any)) as boolean;
  if (!isApprovedForAll) {
    const approveTxHash = await client.writeContract({
      address: shopContract as `0x${string}`,
      abi: shopConfig.abi,
      functionName: "setApprovalForAll",
      args: [marketplaceContract as `0x${string}`, true],
    } as any);
    console.log("approveTxHash", approveTxHash);
  }

  const offer = (await publicClient.readContract({
    address: marketplaceContract as `0x${string}`,
    abi: marketplaceConfig.abi,
    functionName: "getNFTOffer",
    args: [nftInfo.tokenId],
  } as any)) as Offer;

  if (offer.seller !== ethers.constants.AddressZero) {
    const offers = await getAllOffers(chainId, publicClient);
    let completeOffer = offers.find((x) =>
      x.nftInfo.tokenId.eq(nftInfo.tokenId)
    );
    if (completeOffer) {
      await cancelListing(completeOffer.offerId, chainId, client, publicClient);
    }
  }

  const txHash = await client.writeContract({
    address: marketplaceContract as `0x${string}`,
    abi: marketplaceConfig.abi,
    functionName: "createOffer",
    args: [objectToTuple(tokenInfo), objectToTuple(nftInfo), expiresAt],
  } as any);
  console.log("txHash", txHash);
  await publicClient.waitForTransactionReceipt({
    hash: txHash,
  });
  return txHash;
}

export async function cancelListing(
  offerId: string,
  chainId: number,
  client: WalletClient,
  publicClient: PublicClient
) {
  const marketplaceContract = await getMarketplaceContractAddress(chainId);
  const txHash = await client.writeContract({
    address: marketplaceContract as `0x${string}`,
    abi: marketplaceConfig.abi,
    functionName: "cancelOffer",
    account: client.account?.address as `0x${string}`,
    args: [offerId],
  } as any);
  console.log("txHash", txHash);
  await publicClient.waitForTransactionReceipt({
    hash: txHash,
  });
  return txHash;
}

export async function buyProduct(
  offerId: string,
  chainId: number,
  client: WalletClient,
  publicClient: PublicClient
) {
  const marketplaceContract = await getMarketplaceContractAddress(chainId);
  const offer = (await publicClient.readContract({
    address: marketplaceContract as `0x${string}`,
    abi: marketplaceConfig.abi,
    functionName: "getOffer",
    args: [offerId],
  } as any)) as Offer;
  const txHash = await client.writeContract({
    address: marketplaceContract as `0x${string}`,
    abi: marketplaceConfig.abi,
    functionName: "buy",
    account: client.account?.address as `0x${string}`,
    args: [offerId],
    value: ethers.BigNumber.from(offer.tokenInfo.amount).add(offer.tokenInfo.fees), 
  } as any);
  console.log("txHash", txHash);
  await publicClient.waitForTransactionReceipt({
    hash: txHash,
  });
  return txHash;
}

export async function getAllOffers(
  chainId: number,
  publicClient: PublicClient
) {
  const provider = publicClientToProvider(publicClient);
  const marketplaceContract = getMarketplaceContractAddress(chainId)!;
  const contract = new ethers.Contract(
    marketplaceContract,
    marketplaceConfig.abi,
    provider
  );
  const filter = contract.filters.OfferCreated();
  const events = await contract.queryFilter(filter);
  const offers = events.map((event) => event.args);
  return offers.map((x) => ({
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
  }));
}
