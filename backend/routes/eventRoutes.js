import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  getEvents,
  createEvent,
  deleteEvent,
} from "../controllers/eventController.js";

const router = express.Router();

router.route("/:userId/myevents").get(verifyToken, getEvents);

router.route("/:eventId/delete").delete(deleteEvent);
router.route("/:userId/newevent").post(verifyToken, createEvent);

export default router;
