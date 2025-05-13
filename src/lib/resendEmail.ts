import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { createOTP } from "./otp";

const resend = new Resend(process.env.AUTH_RESEND_KEY);

export async function sendEmail(email: string) {
  try {
    const otp = await createOTP(email);
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email, // we can give a string[] here if needed
      subject: "Hello world",
      react: await EmailTemplate({ Otp: otp }),
    });

    if (error) {
      console.log(error);
      return error.message;
    }

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
}
