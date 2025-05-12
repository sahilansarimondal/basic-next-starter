import { auth } from "@/auth";
import { CredentialsAuth } from "@/components/credentials-sign-in";
import { CredentialsSignUp } from "@/components/credentials-sign-up";
import { EamilLinkAuth } from "@/components/email-sign-in";
import GoogleOAuth from "@/components/google-oauth";
import { SignOut } from "@/components/logout";

export default async function Home() {
  const session = await auth();
  console.log("session", session);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {session?.user && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Welcome {session.user.name}</h2>
          <p className="text-lg">{session.user.email}</p>
        </div>
      )}
      <CredentialsSignUp />
      <CredentialsAuth />
      <EamilLinkAuth />
      <GoogleOAuth />
      <SignOut />
    </div>
  );
}
