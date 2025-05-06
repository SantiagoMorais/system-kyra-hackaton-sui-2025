import { z } from "zod";

export const kyraTextAreaSchema = z.object({
  message: z
    .string()
    .max(2000, { message: "The limit of characters is 2.000" }),
});

export type TKyraTextArea = z.infer<typeof kyraTextAreaSchema>;
