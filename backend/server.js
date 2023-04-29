import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Config
dotenv.config({ path: "backend/config.env" });

// Connecting Database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongodb connected with server`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is Working on Port http://localhost:${process.env.PORT}`);
});
