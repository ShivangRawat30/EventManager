const express = require("express");
const app = express();
const Events = require("./routes/eventRoute");
const userRoutes = require("./routes/userRoutes");

// Route imports

app.use("/api/v1/events", Events);
app.use("/api/v1/users", userRoutes);

module.exports = app;
