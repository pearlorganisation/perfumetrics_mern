import { MetadataRoute } from "next";
import { userAgent } from "next/server";
import siteMap from "./sitemap";
import chalk from "chalk";

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  console.log(chalk.bgWhiteBright("IM ON ROBOT.JS FILE"));
  return {
    rules: { userAgent: "*", allow: ["/"], disallow: [] },
    siteMap: `http://localhost:3000/sitemap.xml`,
  };
}