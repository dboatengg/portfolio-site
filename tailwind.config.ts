// import type { Config } from "tailwindcss"
// import typography from "@tailwindcss/typography"

// const config: Config = {
//   darkMode: "class", 
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./content/**/*.{md,mdx}",
//   ],
//   theme: {
//     extend: {
//       typography: ({ theme }) => ({
//         invert: {
//           css: {
//             "--tw-prose-body": theme("colors.gray.300"),
//             "--tw-prose-headings": theme("colors.white"),
//             "--tw-prose-links": theme("colors.blue.400"),
//             "--tw-prose-links-hover": theme("colors.blue.300"),
//             "--tw-prose-bold": theme("colors.white"),
//             "--tw-prose-codes": theme("colors.yellow.300"),
//             "--tw-prose-quotes": theme("colors.gray.400"),
//             "--tw-prose-hr": theme("colors.gray.700"),
//             "--tw-prose-th-borders": theme("colors.gray.600"),
//             "--tw-prose-td-borders": theme("colors.gray.700"),
//           },
//         },
//         DEFAULT: {
//           css: {
//             color: theme("colors.gray.700"),
//             lineHeight: "1.8",
//             h1: {
//               fontWeight: "700",
//               fontSize: theme("fontSize.4xl")[0],
//               marginBottom: "1rem",
//             },
//             h2: {
//               fontWeight: "600",
//               fontSize: theme("fontSize.2xl")[0],
//               marginTop: "2.5rem",
//               marginBottom: "1rem",
//             },
//             h3: {
//               fontWeight: "600",
//               fontSize: theme("fontSize.xl")[0],
//               marginTop: "2rem",
//               marginBottom: "0.75rem",
//             },
//             p: {
//               marginBottom: "1.25rem",
//             },
//             a: {
//               color: theme("colors.blue.600"),
//               textDecoration: "none",
//               fontWeight: "500",
//               "&:hover": {
//                 textDecoration: "underline",
//               },
//             },
//             code: {
//               backgroundColor: theme("colors.gray.800"),
//               color: theme("colors.yellow.300"),
//               padding: "0.2em 0.4em",
//               borderRadius: theme("borderRadius.md"),
//               fontSize: "0.9em",
//             },
//             pre: {
//               backgroundColor: theme("colors.gray.900"),
//               color: theme("colors.gray.100"),
//               padding: "1rem",
//               borderRadius: theme("borderRadius.lg"),
//               overflowX: "auto",
//             },
//           },
//         },
//       }),
//     },
//   },
//   plugins: [typography],
// }

// export default config

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {} },
  plugins: [],
};
