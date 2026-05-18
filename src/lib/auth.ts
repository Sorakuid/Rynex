import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/env";
import { db } from "@/lib/db";
import { schema } from "@/lib/db";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await db
          .select()
          .from(schema.users)
          .where(eq(schema.users.email, credentials.email as string))
          .limit(1);

        if (!user[0]) return null;

        if (!user[0].passwordHash) return null;

        const valid = await bcrypt.compare(
          credentials.password as string,
          user[0].passwordHash,
        );

        if (!valid) return null;

        return {
          id: user[0].id.toString(),
          name: user[0].name,
          email: user[0].email,
          role: user[0].role,
        } as any;
      },
    }),
    ...(env.AUTH_GITHUB_ID && env.AUTH_GITHUB_SECRET
      ? [
          GitHubProvider({
            clientId: env.AUTH_GITHUB_ID,
            clientSecret: env.AUTH_GITHUB_SECRET,
          }),
        ]
      : []),
    ...(env.AUTH_GOOGLE_ID && env.AUTH_GOOGLE_SECRET
      ? [
          GoogleProvider({
            clientId: env.AUTH_GOOGLE_ID,
            clientSecret: env.AUTH_GOOGLE_SECRET,
          }),
        ]
      : []),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github" || account?.provider === "google") {
        const existing = await db
          .select()
          .from(schema.users)
          .where(eq(schema.users.email, user.email!))
          .limit(1);

        if (existing.length > 0) {
          const isOwner =
            account.provider === "github" &&
            (profile as any)?.login === "Adinfauzani";

          if (isOwner && existing[0].role !== "owner") {
            await db
              .update(schema.users)
              .set({ role: "owner" })
              .where(eq(schema.users.email, user.email!));
          }

          return true;
        }

        const isOwner =
          account.provider === "github" &&
          (profile as any)?.login === "Adinfauzani";

        await db.insert(schema.users).values({
          name: user.name,
          email: user.email!,
          role: isOwner ? "owner" : "user",
        });

        return true;
      }

      return true;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user, profile }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }

      if (profile && (profile as any)?.login === "Adinfauzani") {
        token.role = "owner";
      }

      return token;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: env.NEXTAUTH_SECRET,
});
