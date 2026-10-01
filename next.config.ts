import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    localPatterns: [
      { pathname: "/**", search: "" },
      {
        pathname: "/projects/icenter-ghana/admin-logout.webp",
        search: "?v=2",
      },
    ],
  },
};

export default nextConfig;
