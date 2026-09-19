
import { MetadataRoute } from "next";
import { allBlogs } from "@/.contentlayer/generated";
import { siteUrl } from "@/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = allBlogs.filter((post) => post.published !== false).map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const staticPages = ["about", "blog", "guestbook"].map((path) => ({
    url: `${siteUrl}/${path}`,
    lastModified: new Date(),
  }));

  return [{ url: siteUrl, lastModified: new Date() }, ...staticPages, ...posts];
}
