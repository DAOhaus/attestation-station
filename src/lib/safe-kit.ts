import { ethers } from "ethers";
import { GelatoRelayPack } from "@safe-global/relay-kit";
import Safe, {
  EthersAdapter,
  SafeFactory,
  SafeAccountConfig,
  encodeSetupCallData,
} from "@safe-global/protocol-kit";
import {
  MetaTransactionData,
  MetaTransactionOptions,
} from "@safe-global/safe-core-sdk-types";
import SafeApiKit from "@safe-global/api-kit";
import { WalletClient } from "viem";
import { Web3AuthModalPack, Web3AuthConfig } from "@safe-global/auth-kit";
import { Web3AuthOptions } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";

export async function initAuthKit() {
  const options: Web3AuthOptions = {
    clientId: process.env.NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID!,
    web3AuthNetwork: "testnet",
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0x14a33",
      rpcTarget: "https://goerli.base.org",
    },
    uiConfig: {
      theme: "dark",
      loginMethodsOrder: ["google", "facebook"],
    },
  };

  const openloginAdapter = new OpenloginAdapter({
    loginSettings: {
      mfaLevel: "optional",
    },
    adapterSettings: {
      uxMode: "popup",
      whiteLabel: {
        name: "AtteStation",
      },
    },
  });

  const web3AuthConfig: Web3AuthConfig = {
    txServiceUrl: "https://safe-transaction-base-testnet.safe.global",
  };

  // Instantiate and initialize the pack
  const web3AuthModalPack = new Web3AuthModalPack(web3AuthConfig);
  await web3AuthModalPack.init({
    options,
    adapters: [openloginAdapter],
  });

  return web3AuthModalPack;
}

export async function getOrCreateSafe(web3AuthModalPack: Web3AuthModalPack) {
  const { safes } = await web3AuthModalPack.signIn();

  const provider = new ethers.providers.Web3Provider(
    web3AuthModalPack.getProvider()!
  );
  const signer = provider.getSigner();

  const ethAdapter = new EthersAdapter({
    ethers,
    signerOrProvider: signer || provider,
  });

  if (safes && safes.length > 0) {
    const safeAddress = safes[0];
    const safeSDK = await Safe.create({
      ethAdapter,
      safeAddress,
    });
    return safeSDK;
  }

  const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapter });

  const safeAccountConfig: SafeAccountConfig = {
    owners: [await signer.getAddress()],
    threshold: 1,
  };

  const safeSdkOwner = await safeFactory.deploySafe({ safeAccountConfig });

  const safeAddress = await safeSdkOwner.getAddress();

  console.log("Your Safe has been deployed:");
  console.log(`https://goerli.basescan.org/address/${safeAddress}`);
  console.log(`https://app.safe.global/base-gor:${safeAddress}`);

  const safeSDK = await Safe.create({
    ethAdapter,
    safeAddress,
  });

  return safeSDK;
}

export async function relayTransaction(
  safeSDK: Safe,
  transactions: MetaTransactionData[]
) {
  const relayKit = new GelatoRelayPack(process.env.NEXT_PUBLIC_GELATO_API_KEY!);

  const options: MetaTransactionOptions = {
    isSponsored: true,
  };

  const safeTransaction = await relayKit.createRelayedTransaction({
    safe: safeSDK,
    transactions,
    options,
  });

  const signedSafeTransaction = await safeSDK.signTransaction(safeTransaction);

  const response = await relayKit.executeRelayTransaction(
    signedSafeTransaction,
    safeSDK,
    options
  );

  console.log(
    `Relay Transaction Task ID: https://relay.gelato.digital/tasks/status/${response.taskId}`
  );

  return response;
}
