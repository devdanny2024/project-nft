import type { NextConfig } from "next";

const allowedDomains = [
  "euc.li",
  "ens.xyz",
  "nft-cdn.alchemy.com",
  "i.imgur.com",
  "i.seadn.io", // OpenSea images
  "ipfs.io", // IPFS gateway
  "cloudflare-ipfs.com", // IPFS via Cloudflare
  "gateway.pinata.cloud", // Pinata IPFS
  "arweave.net", // Arweave storage
  "nftstorage.link", // NFT.Storage
  "rarible.com", // Rarible NFT marketplace
  "looksrare.org", // LooksRare NFT marketplace
  "zora.co", // Zora marketplace
  "foundation.app", // Foundation marketplace
  "superrare.com", // SuperRare marketplace
  "manifold.xyz", // Manifold NFT platform
  "mintbase.io", // Mintbase NFT marketplace
  "async.art", // Async Art platform
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: allowedDomains.map((domain) => ({
      protocol: "https",
      hostname: domain,
      pathname: "/**",
    })),
  },
};

export default nextConfig;
