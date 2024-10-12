import { StatusCodes } from "http-status-codes";
import { AnyZodObject, ZodError } from "zod";
import { Request, Response } from "express";
type dataValidationParams = {
  querySchema?: AnyZodObject;
  bodySchema?: AnyZodObject;
  paramsSchema?: AnyZodObject;
};
export default function dataValidationMiddleware({
  querySchema,
  bodySchema,
  paramsSchema,
}: dataValidationParams) {
  return async (req: Request, res: Response, next: any) => {
    try {
      if (querySchema) querySchema.parse(req.query);
      if (bodySchema) bodySchema.parse(req.body);
      if (paramsSchema) paramsSchema.parse(req.params);
      next(); 
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join(".")} is ${issue.message}`,
        }));
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: "Invalid data", details: errorMessages });
      } else {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ error: "Internal Server Error" });
      }
    }
  };
}
