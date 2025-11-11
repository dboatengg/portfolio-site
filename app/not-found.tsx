"use client";

import Link from "next/link";
import { Home, FolderGit2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    // <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-neutral-950 text-gray-300">
        <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-neutral-950 text-gray-300"
    >
      {/* Error Code */}
      <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">404</h1>

      {/* Headline */}
      <p className="text-xl text-gray-400 mb-6">
        The page you are looking for does not exist.
      </p>

      {/* Subtext */}
      <p className="max-w-md text-gray-500 mb-10">
        Maybe it’s been moved or the link you clicked is not correct.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-700 text-sm text-white hover:bg-gray-800 transition"
        >
          <Home size={16} />
          <span>Back Home</span>
        </Link>

        <Link
          href="/blog"
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-700 text-sm text-white hover:bg-gray-800 transition"
        >
          <FolderGit2 size={16} />
          <span>View Blog</span>
        </Link>
      </div>

      {/* Signature */}
      <div className="mt-12 flex items-center gap-2 text-gray-500 text-sm">
        <ArrowLeft size={14} />
        <span className="italic">Dont worry, everything is okay.</span>
      </div>
    </motion.main>
  );
}
