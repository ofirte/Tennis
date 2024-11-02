import { z } from "zod";
import mongoose from "mongoose";
import { ISODate } from "../../types";
export const UserZodSchema = z.object({
  uid: z.string(),
  email: z.string().email(),
  authType: z.enum(["local", "google"]),
  firstName: z.string(),
  lastName: z.string(),
  displayName: z.string(),
  role: z.number(),
  createdAt: ISODate,
});
export interface IUser extends z.infer<typeof UserZodSchema> {
  _id: string;
}
const UserSchema = new mongoose.Schema({
  uid: {
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
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  displayName: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});
export default mongoose.model<IUser>("User", UserSchema);
