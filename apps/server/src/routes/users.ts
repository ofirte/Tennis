import express, { Request, Response } from "express";
import { createUser } from "../controllers/UsersController";
import dataValidationMiddleware from "../middlewares/dataValidationMiddleware";
import { UserZodSchema } from "../models/users/User";
const router = express.Router();

router.post(
  "/",
  dataValidationMiddleware({
    bodySchema: UserZodSchema,
  }),
  async (req: Request, res: Response) => {
    const status = await createUser(req);
    res.set("content-type", "application/json");
    res.status(200).json({ status });
  }
);

export default router;
