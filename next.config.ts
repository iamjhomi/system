import type { NextConfig } from "next";

// Configuration for static export suitable for GitHub Pages (project site)
const nextConfig: NextConfig = {
  // Export static HTML to `out/` when building
  output: "export",
  // Ensure routes are exported as directories (good for GH Pages)
  trailingSlash: true,
  // If you're deploying to https://iamjhomi.github.io/system set basePath and assetPrefix
  basePath: "/system",
  assetPrefix: "/system/",
};

export default nextConfig;
