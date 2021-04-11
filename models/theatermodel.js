import mongoose from "mongoose";

const theaterSchema = new mongoose.Schema({
  theatername: {
    type: String,
    required: true,
    unique: true,
  },
  shows: [{ time: String, seats: { type: String }, movieid: String }],
});

export const TheaterModel = mongoose.model("theater", theaterSchema);
