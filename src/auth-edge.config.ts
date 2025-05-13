import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default {
  providers: [Google],
  // pages: {
  //   signIn: "/", // redirect here if unauthenticated
  // },
  // callbacks: {
  //   authorized({ auth, request }) {
  //     // protect everything except login
  //     if (request.nextUrl.pathname === "/") return true;
  //     return !!auth?.user;
  //   },
  // },
} satisfies NextAuthConfig;
