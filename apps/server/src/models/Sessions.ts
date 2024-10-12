import e from "express";
import mongoose, { Document, Schema } from "mongoose";
import { objectId } from "src/types";
import { z } from "zod";
export const sessionZodSchema = z.object({
  date: z.date(),
  time: z.string(),
  duration: z.number(),
  class: objectId,
  attendees: z.array(objectId),
});

export interface ISession extends z.infer<typeof sessionZodSchema>, Document {
  _id: string;
}

const sessionSchema: Schema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  });

  export default mongoose.model<ISession>("Session", sessionSchema);