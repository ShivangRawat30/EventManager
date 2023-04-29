import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: [true, "Please Enter Event Title"],
  },
  Description: {
    type: String,
    required: [true, "Please Enter Event Title"],
  },
  Category: {
    type: String,
    required: [true, "Please Enter Event Title"],
  },
  DueDate: Date,
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
