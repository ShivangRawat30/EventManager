import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// router.get("/:userId/events", verifyToken, getEvents);

export default router;
