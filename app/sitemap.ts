
import { MetadataRoute } from "next";
import { allBlogs } from "@/.contentlayer/generated";
import { projects } from "@/app/projects/data/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dicksonboateng.com";

  // Blog posts
  const posts = allBlogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  // Project pages (dynamic only)
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  // Static pages
  const staticPages = ["", "about", "blog"].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
  }));

  // Final combined sitemap
  return [...staticPages, ...posts, ...projectPages];
}
