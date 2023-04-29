import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { getEvents, createEvent } from "../controllers/eventController.js";

const router = express.Router();

router.get("/:userId/myevents", verifyToken, getEvents);

export default router;
