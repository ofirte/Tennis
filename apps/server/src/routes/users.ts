import express, { Request, Response } from "express";
import { createUser, getUser } from "../controllers/UsersController";
import dataValidationMiddleware from "../middlewares/dataValidationMiddleware";
import { UserZodSchema } from "../models/users/User";
const router = express.Router();

router.post(
  "/",
  dataValidationMiddleware({
    bodySchema: UserZodSchema,
  }),
  createUser
);

router.get("/", getUser);

export default router;
