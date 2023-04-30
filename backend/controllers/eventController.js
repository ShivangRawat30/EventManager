import Event from "../models/eventModel.js";
import User from "../models/userModel.js";
import mongoose from "mongoose";

export const getEvents = async (req, res) => {
  try {
    console.log("hello from createEvent");
    const { userId } = req.params;
    const event = await Event.find({ userId });
    res.status(200).json(event);
    console.log(event);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const createEvent = async (req, res) => {
  try {
    console.log("hello from createEvent");
    const { userId, Title, Description, Category, Priority, Status } = req.body;
    console.log(req.body);
    const user = await User.findById(userId);
    const newEvent = new Event({
      userId,
      Title,
      Description,
      Category,
      Priority: user.Priority,
      Status: user.Status,
      _id: new mongoose.Types.ObjectId(), // generate a new ID for the event
    });

    await newEvent.save();
    console.log(newEvent);

    const events = await Event.find();
    res.status(201).json(events);
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

export const deleteEvent = async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.eventId);
  console.log(event);

  if (!event) {
    return res.status(404).json({ message: "No document found with that ID" });
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};
