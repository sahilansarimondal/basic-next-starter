// lib/otp.ts

import { prisma } from "@/prisma";
import { redirect } from "next/navigation";

export function generateOTP(length = 6) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
}

export async function createOTP(email: string) {
  const code = generateOTP();
  const expiresAt = new Date(Date.now() + 1000 * 60 * 10); // 10 minutes

  await prisma.verificationOtp.create({
    data: {
      email,
      code,
      expiresAt,
    },
  });

  return code;
}

export async function verifyDbOtp(email: string, code: string) {
  const otp = await prisma.verificationOtp.findFirst({
    where: {
      email,
      code,
      expiresAt: { gt: new Date() },
      verified: false,
    },
  });

  if (!otp) return false;

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      emailVerified: new Date(),
    },
  });

  return true;
}
