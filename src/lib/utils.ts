import { ethers } from "ethers";
import { HttpTransport, PublicClient, WalletClient } from "viem";

export function getDeployedContract(owner: string, chainId: number) {
  const deployedContracts = JSON.parse(
    localStorage.getItem("deployedContracts") || "{}"
  );
  const ownerContracts = deployedContracts[owner];
  if (!ownerContracts) {
    return;
  }
  return ownerContracts[chainId.toString()];
}

export function saveDeployedContract(
  owner: string,
  contract: string,
  chainId: number
) {
  const deployedContracts = JSON.parse(
    localStorage.getItem("deployedContracts") || "{}"
  );
  if (!deployedContracts[owner]) {
    deployedContracts[owner] = {};
  }
  deployedContracts[owner][chainId.toString()] = contract;
  localStorage.setItem("deployedContracts", JSON.stringify(deployedContracts));
}

export function getJSONRPCProvider() {
  return new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_BASE_GOERLI_RPC_URL
  );
}

export function publicClientToProvider(publicClient: PublicClient) {
  const { chain, transport } = publicClient;
  const network = {
    chainId: chain?.id,
    name: chain?.name,
    ensAddress: chain?.contracts?.ensRegistry?.address,
  };
  if (transport.type === "fallback")
    return new ethers.providers.FallbackProvider(
      (transport.transports as ReturnType<HttpTransport>[]).map(
        ({ value }) =>
          new ethers.providers.JsonRpcProvider(value?.url, network as any)
      )
    );
  return new ethers.providers.JsonRpcProvider(transport.url, network as any);
}

export function walletClientToSigner(walletClient: WalletClient) {
  const { account, chain, transport } = walletClient;
  const network = {
    chainId: chain?.id,
    name: chain?.name,
    ensAddress: chain?.contracts?.ensRegistry?.address,
  };
  const provider = new ethers.providers.Web3Provider(transport, network as any);
  const signer = provider.getSigner(account?.address);
  return signer;
}

export function getMarketplaceContractAddress(chainId: number) {
  const marketplaceContract =
    chainId === 534351
      ? process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_SCROLL
      : process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT;
  return marketplaceContract;
}

export function objectToTuple(obj: any) {
  return Object.keys(obj).map((key) => obj[key]);
}
