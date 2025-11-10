// import { allBlogs } from "contentlayer/generated"
// import Link from "next/link"
// import { formatShortDate } from "@/utils/formatShortDate" 
// import { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Blog | Dickson Boateng",
//   description: "Hi, I'm Dickson—a frontend developer from Ghana. My tech journey began in 2012, when my father surprised my younger brother and me with our first computer.",

// }

// export default function BlogPage() {
//   const posts = allBlogs.sort((a, b) => +new Date(b.date) - +new Date(a.date))

//   return (
//     <section className="py-10">
//       <header className="max-w-3xl mx-auto mb-10 space-y-8">
//         <h1 className="text-3xl font-bold mb-3">Blog</h1>
//         <p className="text-gray-600 dark:text-gray-400">Sharing technical guides, personal stories and experiences.</p>

//       </header>
//       <ul>
//         {posts.map((post, index) => (
//           <li
//             key={post._id}
//             className={`py-4 flex justify-between ${
//               index !== posts.length - 1 ? "border-b border-neutral-800" : ""
//             }`}
//           >
//             <Link
//               href={`/blog/${post.slug}`}
//               className="text-lg hover:underline text-white"
//             >
//               {post.title}
//             </Link>
//             <time className="text-gray-400 text-sm">
//               {formatShortDate(post.date)} 
//             </time>
//           </li>
//         ))}
//       </ul>
//     </section>
//   )
// }


import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import { formatShortDate } from "@/utils/formatShortDate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Dickson Boateng",
  description:
    "Hi, I'm Dickson—a frontend developer from Ghana. My tech journey began in 2012, when my father surprised my younger brother and me with our first computer.",
};

export default function BlogPage() {
  const posts = allBlogs.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  return (
    <section className="py-10">
      {/* Header */}
      <header className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
          Blog
        </h1>
        <p className="text-gray-400">
          Sharing technical guides, personal stories, and experiences from my
          journey as a developer.
        </p>
      </header>

      {/* Blog List */}
      <ul className="max-w-3xl mx-auto divide-y divide-gray-800">
        {posts.map((post) => (
          <li key={post._id} className="py-6">
            <article>
              <div className="flex justify-between items-center mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xl font-medium text-white hover:text-blue-400 transition-colors duration-300"
                >
                  {post.title}
                </Link>
                <time className="text-sm text-gray-500">
                  {formatShortDate(post.date)}
                </time>
              </div>

              {post.summary && (
                <p className="text-gray-400 leading-relaxed text-sm md:text-base mt-2">
                  {post.summary}
                </p>
              )}

              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  Read more →
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
