import express, { Request, Response } from "express";
import { MySharedType } from "@shared/types";

const app = express();
const port = 3000;
const x: MySharedType = {
  id: "1",
  name: "Ofir Tene",
};
// Basic route to test the server
app.get("/api", (req: Request, res: Response) => {
  res.set("content-type", "application/json");
  res.send(x);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
