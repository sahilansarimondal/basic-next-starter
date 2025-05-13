import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { sendVerificationRequest } from "./lib/authSendRequest";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb } from "./lib/userAction";

export default {
  providers: [
    Google,
    Resend({
      from: process.env.RESEND_FROM_EMAIL,
      sendVerificationRequest: sendVerificationRequest,
    }),
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to salt and hash password
        // const pwHash = createHashedPassword(credentials.password as string);

        // logic to verify if the user exists
        user = await getUserFromDb(
          credentials.email as string,
          credentials.password as string
        );

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
