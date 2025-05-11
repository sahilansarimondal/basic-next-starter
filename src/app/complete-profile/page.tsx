import { auth, signIn } from "@/auth";
import { comparePassword } from "@/lib/comparePassword";
import { createUser } from "@/lib/userAction";
import React from "react";

const CompleteProfilePage = async () => {
  const session = await auth();
  const user = session?.user;

  console.log("user", user);
  console.log("session", session);
  if (!user) {
    return <div>Not logged in</div>;
  }
  return (
    <form
      action={async (formData) => {
        "use server";
        const isSame = comparePassword(formData);
        if (!isSame) {
          throw new Error("Password and confirm password do not match");
        }
        await createUser(formData);
        await signIn("credentials", formData);
      }}
    >
      <label>
        Name
        <input name="name" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" min={4} />
      </label>
      <label>
        Confirm Password
        <input name="confirm-password" type="text" min={4} />
      </label>
      <button>Create Profile</button>
    </form>
  );
};

export default CompleteProfilePage;
