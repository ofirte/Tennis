import express, { Request, Response } from "express";
import dataValidationMiddleware from "../middlewares/dataValidationMiddleware";
import { classZodSchema } from "../models/Classes/Classes";
import { createRecurringClass } from "../controllers/ClassesController";
const router = express.Router();

router.post(
  "/create-recurring-class",
  dataValidationMiddleware({
    bodySchema: classZodSchema,
  }),
  (req: Request, res: Response) => {
    createRecurringClass(req.body);
    res.set("content-type", "application/json");
    res.status(200).json({ message: "Recurring class created successfully" });
  }
);

export default router;
