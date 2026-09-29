import { MetadataRoute } from "next";
import { allBlogs } from "@/.contentlayer/generated";
import { siteUrl } from "@/config/site";
import { projects } from "@/data/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Blog posts
  const posts = allBlogs
    .filter((post) => post.published !== false)
    .map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.date,
    }));

  // Project detail pages (only those with detail content)
  const projectPages = projects
    .filter((project) => project.learnMore && project.detail)
    .map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
    }));

  // Static pages
  const staticPages = ["about", "blog", "guestbook"].map((path) => ({
    url: `${siteUrl}/${path}`,
    lastModified: new Date(),
  }));

  return [
    { url: siteUrl, lastModified: new Date() },
    ...staticPages,
    ...posts,
    ...projectPages,
  ];
}