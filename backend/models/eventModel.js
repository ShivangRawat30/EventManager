import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  Title: {
    type: String,
  },
  Description: {
    type: String,
  },
  Category: {
    type: String,
  },
  Priority: {
    type: String,
    enum: ["imp", "very-imp", "not so important"],
    default: "imp",
  },
  Status: {
    type: String,
    enum: ["completed", "in progress", "pending"],
    default: "pending",
  },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
