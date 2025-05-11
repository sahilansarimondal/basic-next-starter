import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        className=" border  p-2 rounded-2xl mt-4 cursor-pointer bg-slate-100"
        type="submit"
      >
        Sign Out
      </button>
    </form>
  );
}
