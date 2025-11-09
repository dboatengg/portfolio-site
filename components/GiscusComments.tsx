// 'use client';

// import Giscus from '@giscus/react';
// import { useTheme } from 'next-themes';

// export default function GiscusComments() {
//   const { resolvedTheme } = useTheme();
//   const theme = resolvedTheme === 'light' ? 'noborder_light' : 'noborder_dark';

//   return (
//     <Giscus
//       repo="your-username/your-repo-name"
//       repoId="R_xxxxxxxxxxx"
//       category="Announcements"
//       categoryId="DIC_xxxxxxxxxxxx"
//       mapping="pathname"
//       reactionsEnabled="1"
//       emitMetadata="0"
//       inputPosition="top"
//       theme={theme}
//       lang="en"
//       loading="lazy"
//     />
//   );
// }   

"use client"

import Giscus from "@giscus/react"

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="dboatengg/portfolio-site"
      repoId="R_kgDOQJNf4Q"
      category="Comments"
      categoryId="DIC_kwDOQJNf4c4Cxlxk"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    //   crossorigin="anonymous"
    />
  )
}
