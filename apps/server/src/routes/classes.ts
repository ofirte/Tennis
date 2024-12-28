import express, { Request, Response } from "express";
import dataValidationMiddleware from "../middlewares/dataValidationMiddleware";
import { classZodSchema } from "../models/Classes/Classes";
import {
  createRecurringClass,
  getRecurringClasses,
} from "../controllers/ClassesController";
const router = express.Router();

router.post(
  "/create-recurring-class",
  dataValidationMiddleware({
    bodySchema: classZodSchema,
  }),
  createRecurringClass
);

router.get("/recurring-classes", getRecurringClasses);

export default router;
