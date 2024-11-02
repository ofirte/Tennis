import { z } from "zod";
import mongoose from "mongoose";
export const UserZodSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  authType: z.enum(["local", "google"]),
  role: z.number(),
});
export const LocalUserZodSchema = UserZodSchema.extend({
  password: z.string(),
});
export interface IUser extends z.infer<typeof UserZodSchema> {
  _id: string;
}
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    authType: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      required: true,
    },
  },
  { discriminatorKey: "authType" }
);
export default mongoose.model<IUser>("User", UserSchema);
