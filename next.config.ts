import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.1stdibscdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
