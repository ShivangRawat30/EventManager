const express = require("express");
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:userId/events", verifyToken, getEvents);

module.exports = router;
