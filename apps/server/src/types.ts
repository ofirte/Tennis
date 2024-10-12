import { Types } from "mongoose";
import { z } from "zod";
export const objectId = z.string().refine((val) => {
  return Types.ObjectId.isValid(val);
});
