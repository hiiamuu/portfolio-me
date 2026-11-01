import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
      // Importing a PDF (e.g. the CV in app/assets) returns its URL.
      "*.pdf": {
        type: "asset",
      },
    },
  },
};

export default nextConfig;
