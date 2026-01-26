import type { NextConfig } from "next";


const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    remotePatterns: [
      {
      protocol: "https",
      hostname: "i.pinimg.com",
      pathname: "/**",
    }
    ]
  }
}

export default nextConfig as NextConfig;