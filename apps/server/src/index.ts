import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ClassesRoutes from "./routes/classes";
import LocationsRoutes from "./routes/locations";
import StorageRoutes from "./routes/storage";
import UsersRoutes from "./routes/users";

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
app.use(express.json());
app.use("/api/classes", ClassesRoutes);
app.use("/api/locations", LocationsRoutes);
app.use("/api/storage", StorageRoutes);
app.use("/api/users", UsersRoutes);
// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
