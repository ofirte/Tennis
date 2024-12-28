import express from "express";

import { getTennisCardMedia } from "../controllers/StorageController";

const router = express.Router();

router.get("/tennis-card-media", getTennisCardMedia);

export default router;
