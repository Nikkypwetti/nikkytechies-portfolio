import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname:
          "/Nikkypwetti/ai-revenue-intelligence-agent/main/docs/images/**",
      },
    ],
  },
};

export default nextConfig;
