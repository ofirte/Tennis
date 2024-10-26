import express from "express";

import { getTennisCardMedia } from "../controllers/StorageController";

const router = express.Router();

router.get("/tennis-card-media", async (req, res) => {
  const url = await getTennisCardMedia();
  res.set("content-type", "application/json");
  res.status(200).json({ url });
});

export default router;
