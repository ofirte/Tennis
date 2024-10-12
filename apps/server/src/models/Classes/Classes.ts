import mongoose, { Document, Schema, Types } from "mongoose";
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
export interface IClass extends z.infer<typeof classZodSchema> {
  _id: Types.ObjectId;
}

const classSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D"],
      required: true,
    },
    coach: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { discriminatorKey: "classType" }
);

const Class = mongoose.model<IClass>("Class", classSchema);
export default Class;
