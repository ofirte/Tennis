import mongoose, { Schema, Types } from "mongoose";
import Class, { IClass, classZodSchema } from "./Classes";
import { z } from "zod";
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
export interface IRecurringClass
  extends z.infer<typeof recurringClassZodSchema> {
  _id: Types.ObjectId;
}
const recurringClassSchema: Schema = new mongoose.Schema(
  {
    dayOfWeek: {
      type: String,
      enum: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { discriminatorKey: "classType" }
);

const RecurringClass = Class.discriminator<
  IRecurringClass,
  mongoose.Model<IRecurringClass>
>("RecurringClass", recurringClassSchema);
export default RecurringClass;
