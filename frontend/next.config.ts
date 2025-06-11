import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3232",
        pathname: "/assets/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4848",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "bookstore-gxg7.onrender.com",
        pathname: "/assets/**",
      },
    ],
  },
};
export default nextConfig;
