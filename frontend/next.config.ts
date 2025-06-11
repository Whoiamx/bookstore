const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bookstore-gxg7.onrender.com",
        pathname: "/assets/**",
      },
      // Mantener localhost para dev si querés
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
