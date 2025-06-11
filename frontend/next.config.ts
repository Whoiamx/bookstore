const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bookstore-gxg7.onrender.com",
        pathname: "/assets/**",
      },

      {
        protocol: "http",
        hostname: "localhost",
        port: "3232",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
