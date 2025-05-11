import { signIn } from "@/auth";

export function CredentialsAuth() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In with credentials</button>
    </form>
  );
}
