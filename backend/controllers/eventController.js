import Event from "../models/eventModel.js";
import User from "../models/userModel.js";

export const createEvent = async (req, res) => {
  try {
    const { userId, Title, Description, Category, Priority, Status } = req.body;
    const user = await User.findById(userId);
    const newEvent = new Event({
      userId,
      name: user.name,
      Title,
      Description,
      Category,
      Priority,
      Status,
    });
    await newEvent.save();

    const Event = await Event.find();
    res.status(201).json(Event);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    const { userId } = req.params;
    const event = await Event.find({ userId });
    res.status(200).json(event);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// export const deleteEvent = async (req,res) => {
//     const event = await Event.findByIdAndDelete(req.pa)
// }
