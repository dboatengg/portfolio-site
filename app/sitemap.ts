import { MetadataRoute } from "next";
import { allBlogs } from "@/.contentlayer/generated";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dicksonboateng.com";

  const posts = allBlogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const staticPages = [
    "",
    "about",
    "blog",
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
  }));

  // Combine
  return [...staticPages, ...posts];
}
