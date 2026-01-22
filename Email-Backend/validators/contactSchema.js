import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .min(1, "Email is required"),
  phone: z.string().trim().min(1, "Phone is required"),
  message: z.string().trim().min(1, "Message is required"),
});
