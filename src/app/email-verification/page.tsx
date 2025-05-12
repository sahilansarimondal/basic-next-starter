import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { verifyDbOtp } from "@/lib/otp";

async function verifyOTP(formData: FormData) {
  "use server";

  const otp = formData.get("otp");
  const email = formData.get("email");

  const isValid = await verifyDbOtp(email as string, otp as string);
  // This is where you would typically verify the OTP against your backend
  // For demo purposes, let's assume 123456 is the valid OTP
  if (isValid) {
    revalidatePath("/email-verification");
    redirect("/dashboard"); // Redirect to dashboard after successful verification
  } else {
    revalidatePath("/email-verification");
    redirect("/");
  }
}

export default function VerificationPage({
  searchParams,
}: {
  searchParams: { email: string };
}) {
  const email = searchParams.email;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify your email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter the verification code sent to your email
          </p>
        </div>

        <form action={verifyOTP} className="mt-8 space-y-6">
          <div>
            <input type="email" name="email" value={email || ""} hidden />
            <label htmlFor="otp" className="sr-only">
              Verification Code
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter verification code"
              maxLength={6}
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
