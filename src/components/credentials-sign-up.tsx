import { createUser } from "@/lib/userAction";
import { redirect } from "next/navigation";

export function CredentialsSignUp() {
  return (
    <form
      action={async (formData) => {
        "use server";
        const user = await createUser(formData);

        if (user) {
          const emailEncoded = encodeURIComponent(formData.get('email') as string);
          redirect(`/email-verification?email=${emailEncoded}`);
        }
      }}
    >
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign Up with credentials</button>
    </form>
  );
}
