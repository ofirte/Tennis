import mongoose, { Schema, Types } from "mongoose";
import User, { UserZodSchema } from "./User";
import { z } from "zod";
export const localUserZodSchema = UserZodSchema.extend({
  password: z.string(),
});
export interface ILocalUser extends z.infer<typeof localUserZodSchema> {
  _id: Types.ObjectId;
}
const localUserSchema: Schema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: true,
    },
  },
  { discriminatorKey: "authType" }
);

const LocalUser = User.discriminator<ILocalUser, mongoose.Model<ILocalUser>>(
  "LocalUser",
  localUserSchema
);
export default LocalUser;
