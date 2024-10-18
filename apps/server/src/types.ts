import { Types } from "mongoose";
import { z } from "zod";
export const objectId = z.string().refine(
  (val) => {
    return Types.ObjectId.isValid(val);
  },
  {
    message: "Invalid ObjectId format",
  }
);

export const ISODate = z.string().refine(
  (val) => {
    return !isNaN(Date.parse(val));
  },
  {
    message: "Invalid ISO 8601 date format",
  }
);
