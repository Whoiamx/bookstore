import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4848",
        pathname: "/assets/**",
      },
    ],
  },
};
export default nextConfig;
