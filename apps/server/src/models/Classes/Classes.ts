import mongoose, { Document, Schema } from "mongoose";
export interface IClass extends Document {
  title: string;
  location: string;
  capacity: number;
  createdBy: string;
  createdAt: Date;
  classType: string;
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
