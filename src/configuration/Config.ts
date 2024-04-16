import { ThemingProps } from "@chakra-ui/react";
import {
  polygonMumbai,
  celoAlfajores,
  mantleTestnet,
  lineaTestnet,
  baseGoerli,
  arbitrumGoerli,
  scrollSepolia,
  mainnet,
  goerli,
  sepolia,
  polygon,
  optimism,
  arbitrum,
  scrollTestnet,
  gnosis,
} from "viem/chains";

export const SITE_NAME = "AtteStation";
export const PROJECT_ID = "5f7aafd09a6666791de420f9025324fc";
export const SITE_DESCRIPTION = "Ready to Use Dapp Boilerplate";
export const SITE_URL = "eth-global-istanbul-rwa-infra.vercel.app";

export const THEME_INITIAL_COLOR = "system";
export const THEME_COLOR_SCHEME: ThemingProps["colorScheme"] = "gray";
export const THEME_CONFIG = { initialColorMode: THEME_INITIAL_COLOR };

export const SOCIAL_MEDIUM = "@SamuelQZQ";
export const SOCIAL_TWITTER = "__Jalel";
export const SOCIAL_GITHUB = "SamuelQZQ";
export const SOCIAL_LINKEDIN = "SamuelQZQ";
export const SOCIAL_DISCORD = "123456789123456789";

export const INFURA_KEY = "817597f04d6941649c41255a1b10e815";
export const NETWORKS = [
  // scrollSepolia,
  // arbitrumGoerli,
  baseGoerli,
  sepolia,
  // lineaTestnet,
  // mantleTestnet,
  // {
  //   ...celoAlfajores,
  //   name: "Celo Alfajores",
  // },
  polygonMumbai,
  gnosis,
  mainnet,
];
