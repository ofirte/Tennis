import express, { Request, Response } from "express";
import mongoose, { Types } from "mongoose";
import dotenv from "dotenv";
import { createRecurringClass } from "./services/ClassesService";
import dataValidationMiddleware from "./middlewares/dataValidationMiddleware";
import {  MySharedType } from "@shared/types";
import { classZodSchema } from "./models/Classes/Classes";

dotenv.config();
const app = express();
const connectToDatabase = async () => {
  try {
    if (process.env.DB_URI) {
      await mongoose.connect(process.env.DB_URI);
      console.log("Successfully connected to the DB");
    }
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};
connectToDatabase();
const x: MySharedType = {
  id: "1",
  name: "Ofir Tene",
};
// Basic route to test the server
app.use(express.json());
app.post(
  "/api/classes/create-recurring-class",
  dataValidationMiddleware({
    bodySchema: classZodSchema,
  }),
  (req: Request, res: Response) => {
    createRecurringClass({
      title: "Yoga",
      location: "Tel Aviv",
      capacity: 20,
      createdBy: new Types.ObjectId(),
      dayOfWeek: "Sunday",
      time: "08:00",
    });
    res.set("content-type", "application/json");
    res.send(x);
  }
);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
