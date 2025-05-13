import NextAuth from "next-auth";
import authEdgeConfig from "./auth-edge.config";

export const { auth: middleware } = NextAuth(authEdgeConfig);

export const config = {
  matcher: ["/dashboard/:path*", "/account/:path*", "/admin/:path*"],
};
