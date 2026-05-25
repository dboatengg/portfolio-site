"use client"

import Giscus from "@giscus/react"
import { useTheme } from "next-themes";


export default function Comments() {
    const { resolvedTheme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo="dboatengg/portfolio-site"
      repoId="R_kgDOQJNf4Q"
      category="Comments"
      categoryId="DIC_kwDOQJNf4c4Cxlxk"
      mapping="pathname"
      strict="0"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="top"
      lang="en"
      loading="lazy"
      // theme="preferred_color_scheme"
      theme={
          resolvedTheme === "dark"
            ? "noborder_dark"
            : "noborder_light"
        }
    //   crossorigin="anonymous"
    />
  )
}
