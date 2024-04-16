import type { BigNumberish } from "ethers";

export type TokenInfo = {
  amount: BigNumberish; // input by user
  fees: BigNumberish; // 0
  tokenAddress: string; // ethers.constants.AddressZero
};

export type NFTInfo = {
  nftAddress: string; // useCurrentContract
  tokenId: BigNumberish; // 
};

export type Offer = {
  seller: string;
  tokenInfo: TokenInfo;
  nftInfo: NFTInfo;
  expiresAt: BigNumberish;
  offerId: BigNumberish;
};

export type Bid = {
  bidder: string;
  tokenInfo: TokenInfo;
  nftInfo: NFTInfo;
  expiresAt: BigNumberish;
};
