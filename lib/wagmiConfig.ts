"use client";

import { Chain, connectorsForWallets } from "@rainbow-me/rainbowkit";
import { http, createConfig } from "wagmi";
import { mainnet, sepolia, berachainTestnetbArtio } from "wagmi/chains";
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

const projectId = "ede387d4877ed6b263a427423aaf8639";

const beraChain = {
  id: 80094,
  name: "Berachain",
  iconUrl: "https://docs.berachain.com/assets/berachain-icon.svg",
  iconBackground: "#000",
  nativeCurrency: { name: "Berachain", symbol: "BERA", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.berachain.com/"] },
  },
  blockExplorers: {
    default: { name: "BeraScan", url: "https://berascan.com/" },
  },
  // contracts: {
  //   multicall3: {
  //     address: "0xca11bde05977b3631167028862be2a173976ca11",
  //     blockCreated: 11_907_934,
  //   },
  // },
} as const satisfies Chain;

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
  connectors,
  chains: [mainnet, beraChain, sepolia, berachainTestnetbArtio],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [berachainTestnetbArtio.id]: http(),
    [beraChain.id]: http(),
  },
  ssr: true,
});
