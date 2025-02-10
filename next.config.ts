import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "euc.li",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ens.xyz",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
