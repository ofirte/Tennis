import mongoose, { Schema } from "mongoose";
import Class, { IClass } from "./Classes";
export interface IRecurringClass extends IClass {
  dayOfWeek: string;
  time: string;
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
