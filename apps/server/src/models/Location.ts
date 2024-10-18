import { z } from "zod";
import { ISODate, objectId } from "../types";
import mongoose from "mongoose";
const LocationZodSchema = z.object({
  name: z.string(),
  address: z.string(),
  city: z.string(),
  createdBy: objectId,
  createdAt: ISODate,
});
export interface ILocation extends z.infer<typeof LocationZodSchema> {
  _id: string;
}
const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
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
});
export default mongoose.model<ILocation>("Location", LocationSchema);
