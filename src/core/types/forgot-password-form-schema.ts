import { z } from "zod";

export const forgotPasswordFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Write your email correctly" })
    .email()
    .refine(
      (value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(value);
      },
      { message: "Invalid email" }
    ),
});

export type TForgotPassword = z.infer<typeof forgotPasswordFormSchema>;
