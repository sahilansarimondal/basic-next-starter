import { signIn } from "@/auth";

export default function GoogleOAuth() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        className=" border  p-2 rounded-2xl mt-4 cursor-pointer bg-slate-100"
        type="submit"
      >
        Signin with Google
      </button>
    </form>
  );
}
