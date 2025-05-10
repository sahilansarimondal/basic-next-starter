import SignIn from "@/components/sign-in";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <SignIn />
    </div>
  );
}
