import { prisma } from "@/prisma";
import { sendEmail } from "./resendEmail";

export const getUserFromDb = async (email: string, password: string) => {
  // Simulate a database call
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user?.password === password) {
    return user;
  }
  return null;
};

export const createUser = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Simulate a database call
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  await sendEmail(email);

  return user;
};
