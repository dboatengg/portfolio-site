// import { MetadataRoute } from "next";
// import { allBlogs } from "@/.contentlayer/generated";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const posts = allBlogs

//   return [
//     {
//       url: "https://dicksonboateng.com",
//       lastModified: new Date(),
//     },
//     ...posts.map((post) => ({
//       url: `https://dicksonboateng.com/blog/${post.slug}`,
//       lastModified: post.date,
//     })),
//   ];
// }

// app/sitemap.ts
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
    "projects",
    "blog",
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
  }));

  // Combine
  return [...staticPages, ...posts];
}
