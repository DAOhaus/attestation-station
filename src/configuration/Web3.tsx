import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { ReactNode } from 'react'
import { infuraProvider } from 'wagmi/providers/infura'
import { NETWORKS, INFURA_KEY, SITE_NAME, PROJECT_ID } from '../configuration/Config'
import React from 'react'

interface Props {
  children: ReactNode
}

const { chains, publicClient  } = configureChains(NETWORKS, [infuraProvider({ apiKey: INFURA_KEY }), publicProvider()])

const { connectors } = getDefaultWallets({
  appName: SITE_NAME,
  projectId: PROJECT_ID,
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export function Web3Provider(props: Props) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact" coolMode chains={chains}>
        {props.children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
