import express from "express";
import dataValidationMiddleware from "../middlewares/dataValidationMiddleware";
import { LocationZodSchema } from "../models/Location";
import { createLocation } from "../controllers/LocationsController";
const router = express.Router();

router.get("/:locationId", (req, res) => {});

router.post(
  "/create-location",
  dataValidationMiddleware({
    bodySchema: LocationZodSchema,
  }),
  createLocation
);

export default router;
