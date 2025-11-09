// app/sitemap.ts
import { MetadataRoute } from "next";
import { allBlogs } from "@/.contentlayer/generated";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = allBlogs

  return [
    {
      url: "https://dicksonboateng.com",
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `https://dicksonboateng.com/blog/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
