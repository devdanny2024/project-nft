"use client";

// import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http, createConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  goerli,
  sepolia,
  berachainTestnetbArtio,
} from "wagmi/chains";
import {
  tokenPocketWallet,
  trustWallet,
  okxWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
  oneKeyWallet,
  imTokenWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";

const projectId = "ede387d4877ed6b263a427423aaf8639";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        tokenPocketWallet,
        okxWallet,
        coinbaseWallet,
        walletConnectWallet,
        trustWallet,
        oneKeyWallet,
        imTokenWallet,
      ],
    },
  ],
  {
    appName: "Project-NFT",
    projectId,
  }
);

export const wagmiConfig = createConfig({
  // appName: "Project-NFT",
  connectors,
  // projectId,
  chains: [mainnet, sepolia, berachainTestnetbArtio],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [berachainTestnetbArtio.id]: http(),
  },
  ssr: true,
});
