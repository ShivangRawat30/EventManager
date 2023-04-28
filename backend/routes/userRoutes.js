const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/login", authController.login);
router.post("/signup", authController.signup);

module.exports = router;
