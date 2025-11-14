import type { NextConfig } from "next";

// Configuration for static export suitable for GitHub Pages (project site)
const nextConfig: NextConfig = {
  // Export static HTML to `out/` when building
  output: "export",
  // Ensure routes are exported as directories (good for GH Pages)
  trailingSlash: true,
  // Use relative asset paths so the exported site can be served from GitHub Pages
  // without requiring a specific basePath. Relative assets are more portable.
  assetPrefix: "./",
};

export default nextConfig;
