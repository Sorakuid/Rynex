"use server";

import { signIn } from "@/lib/auth";
import { loginSchema } from "@/lib/validators/auth";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validated = loginSchema.parse({ email, password });

  try {
    await signIn("credentials", {
      email: validated.email,
      password: validated.password,
      redirect: false,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Invalid credentials" };
  }
}
