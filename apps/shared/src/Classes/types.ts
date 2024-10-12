import { z } from "zod";
export const classZodSchema = z.object({
  title: z.string(),
  level: z.enum(["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D"]),
  coach: z.string(),
  location: z.string(),
  capacity: z.number(),
  createdBy: z.string(),
  createdAt: z.date().default(() => new Date()),
});
export const recurringClassZodSchema = classZodSchema.extend({
  dayOfWeek: z.enum([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]),
  time: z.string(),
});
