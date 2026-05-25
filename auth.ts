// auth.ts
// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     GitHub({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       session.user.id = token.sub!;
//       session.user.username = (token.profile as { login: string })?.login;
//       return session;
//     },
//     async jwt({ token, profile }) {
//       if (profile) {
//         token.profile = profile;
//       }
//       return token;
//     },
//   },
// });


import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.profile = profile;
        token.githubId = (profile as unknown as { id: number }).id.toString();
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = (token.githubId as string) ?? token.sub!;
      session.user.username = (token.profile as { login: string })?.login;
      return session;
    },
  },
});