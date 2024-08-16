// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      // Add other custom properties if needed
    } & DefaultSession["user"];
  }

  interface Token {
    id?: string;
    email?: string;
    name?: string;
    image?: string;
    // Add other custom properties if needed
  }
}
