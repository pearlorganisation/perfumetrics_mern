import bundleAnalyzer from "@next/bundle-analyzer";
import { StrictMode } from "react";

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "res.cloudinary.com",
      "via.placeholder.com",
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
