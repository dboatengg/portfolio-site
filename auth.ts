import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, profile, account }) {
      if (profile && account) {
        token.provider = account.provider;

        if (account.provider === "github") {
          token.providerId = (profile as unknown as { id: number }).id.toString();
          token.username = (profile as { login: string }).login;
        } else if (account.provider === "google") {
          token.providerId = profile.sub as string;
          const email = (profile.email as string) ?? "";
          token.username = email.split("@")[0] || (profile.name as string);
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = (token.providerId as string) ?? token.sub!;
      session.user.provider = token.provider as string;
      session.user.username = token.username as string;
      return session;
    },
  },
});