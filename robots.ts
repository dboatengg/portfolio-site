import { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dicksonboateng.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // adjust if you have API routes you don't want crawled
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}